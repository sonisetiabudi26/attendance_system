import { Inject, Injectable, OnModuleInit } from "@nestjs/common";

import type { ClientGrpc } from "@nestjs/microservices";

import { firstValueFrom } from "rxjs";

import { EMPLOYEE_GRPC } from "../../grpc/grpc.constant";

import { EmployeeGrpcClient } from "../../grpc/interfaces/employee.interface";

import {
  DeleteEmployeeRequest,
  DeleteEmployeeResponse,
  EmployeeResponse,
  GetEmployeeRequest,
  GetEmployeesRequest,
  GetEmployeesResponse,
  UpdateEmployeeRequest,
  UpdateEmployeeResponse,
} from "@attendance/proto/generated/employee";
import { UpdateEmployeeDto } from "../dto/update-employee.dto";
import { UserClaims } from "@attendance/proto/generated/auth";
import { ListEmployeeDto } from "../../auth/dto/list-employee.dto";
import { AuthGrpcService } from "../../grpc/interfaces/auth.interface";
import { AuthService } from "../../auth/services/auth.service";

@Injectable()
export class EmployeeService implements OnModuleInit {
  constructor(
    @Inject(EMPLOYEE_GRPC)
    private readonly client: ClientGrpc,
      private authService: AuthService
  ) {}

  private employeeGrpcService: EmployeeGrpcClient;


  onModuleInit() {
    this.employeeGrpcService =
      this.client.getService<EmployeeGrpcClient>("EmployeeService");
      // this.authGrpcService =
      //   this.client.getService<AuthGrpcService>("AuthService");
  }

  async getEmployeeByUserId(
    request: GetEmployeeRequest
  ): Promise<EmployeeResponse> {
    try {
      return await firstValueFrom(
        this.employeeGrpcService.getEmployee({ userId: request.userId })
      );
    } catch (e) {
      console.error(e);

      throw e;
    }
  }

  async listPosition() {
    try {
      return firstValueFrom(
        this.employeeGrpcService.listPosition({}),
    );
    } catch (error) {
      console.log(error);
      throw error;
    }
    
}

  async updateEmployee(
    request: UpdateEmployeeRequest
  ): Promise<UpdateEmployeeResponse> {
    return firstValueFrom(this.employeeGrpcService.updateEmployee(request));
  }

  async deleteEmployee(
    request: DeleteEmployeeRequest
  ): Promise<DeleteEmployeeResponse> {
    return firstValueFrom(this.employeeGrpcService.deleteEmployee(request));
  }
async me(
       user
    ){
      try {
        console.log(user.userId);
         const employee =  
           await firstValueFrom(this.employeeGrpcService.getEmployeeByUserId({
                userId: user.userId,
            }));

        return {
            userId: user.userId,
            username: user.username,
            email: user.email,
            role: user.role,
            employee,
        };
      } catch (error) {
        console.log('Error: ' +  error);
        throw error;
        
      }
       
    }
//    async findAll(
//     dto: ListEmployeeDto,
// ) {

//     return firstValueFrom(

//         this.employeeGrpcService.getEmployees({
//             page: dto.page,
//             limit: dto.limit,
//             search: dto.search ?? "",
//             positionId: dto.positionId ?? "",

//         }),

//     );

// }
async findAll(
    request: GetEmployeesRequest,
): Promise<GetEmployeesResponse> {

    //----------------------------------
    // Employee Service
    //----------------------------------

    const employees =
        await firstValueFrom(
            this.employeeGrpcService.getEmployees(request),
        );
console.log(employees);
    //----------------------------------
    // UserIds
    //----------------------------------

    const userIds =
        employees.employees.map(x => x.userId);
    //----------------------------------
    // Auth Service
    //----------------------------------


    console.log(userIds);

   const users = await this.authService.getUsersByIdsa(userIds);

   


    //----------------------------------
    // User Map
    //----------------------------------

    const userMap = new Map(
        users.users.map(user => [
            user.userId,
            user,
        ]),
    );
console.log(userMap);
    //----------------------------------
    // Merge
    //----------------------------------

    return {
        employees:
            employees.employees.map(employee => {
                const user =
                    userMap.get(employee.userId);
                return {
                    ...employee,
                    email: user?user.email:'',
                    role: user?user.role:'',
                    status: user?user.status:'',
                };
            }),
        page: employees.page,
        limit: employees.limit,
        total: employees.total,
    };
}
}
