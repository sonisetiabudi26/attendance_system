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
  UpdateEmployeeRequest,
  UpdateEmployeeResponse,
} from "@attendance/proto/generated/employee";
import { UpdateEmployeeDto } from "../dto/update-employee.dto";
import { UserClaims } from "@attendance/proto/generated/auth";

@Injectable()
export class EmployeeService implements OnModuleInit {
  constructor(
    @Inject(EMPLOYEE_GRPC)
    private readonly client: ClientGrpc
  ) {}

  private employeeGrpcService: EmployeeGrpcClient;

  onModuleInit() {
    this.employeeGrpcService =
      this.client.getService<EmployeeGrpcClient>("EmployeeService");
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
            role: user.role,
            employee,
        };
      } catch (error) {
        console.log('Error: ' +  error);
        throw error;
        
      }
       
    }
  //  async getEmployee(
  //   request: GetEmployeeRequest,
  // ): Promise<EmployeeResponse> {

  //   return firstValueFrom(
  //     this.employeeGrpcService.getEmployee({userId:request.userId}),
  //   );
  // }
}
