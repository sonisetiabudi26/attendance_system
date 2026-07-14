import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";

import {
  CreateEmployeeRequest,
  CreateEmployeeResponse,
  DeleteEmployeeRequest,
  DeleteEmployeeResponse,
  EmployeeResponse,
  GetEmployeeRequest,
  GetEmployeesRequest,
  ListPositionResponse,
  UpdateEmployeeRequest,
  UpdateEmployeeResponse,
} from "@attendance/proto/generated/employee";

import { CreateEmployeeService } from "../services/create-employee.service";

import { EmployeeGrpcMapper } from "./employee.grpc.mapper";
import { UpdateEmployeeService } from "../services/update-employee.service";
import { GetEmployeeService } from "../services/get-employee.service";
import { DeleteEmployeeService } from "../services/delete-employee.service";
import { ListPositionService } from "../services/list-position.service";

@Controller()
export class EmployeeGrpcController {
  constructor(
    private readonly createEmployeeService: CreateEmployeeService,
    private readonly updateEmployeeService: UpdateEmployeeService,
    private readonly getEmployeeService: GetEmployeeService,
    private readonly deleteEmployeeService: DeleteEmployeeService,
    private readonly listPositionService: ListPositionService,
    
  ) {}

  @GrpcMethod("EmployeeService", "CreateEmployee")
  async createEmployee(
    request: CreateEmployeeRequest
  ): Promise<CreateEmployeeResponse> {
    const contract = EmployeeGrpcMapper.toCreateEmployeeContract(request);

    const employee = await this.createEmployeeService.execute(contract);
    return EmployeeGrpcMapper.toCreateEmployeeResponse(employee);
  }

  @GrpcMethod("EmployeeService", "UpdateEmployee") async updateEmployee(
    request: UpdateEmployeeRequest
  ): Promise<UpdateEmployeeResponse> {
    const employee = await this.updateEmployeeService.execute(
      EmployeeGrpcMapper.toUpdateEmployeeContract(request)
    );
    return EmployeeGrpcMapper.toUpdateEmployeeResponse(employee);
  }

  @GrpcMethod("EmployeeService", "GetEmployee")
  async getEmployee(request: GetEmployeeRequest): Promise<EmployeeResponse> {
    return this.getEmployeeService.execute(request.userId);
  }

  @GrpcMethod('EmployeeService', "DeleteEmployee")
  async deleteEmployee(
    request: DeleteEmployeeRequest
  ): Promise<DeleteEmployeeResponse> {
    await this.deleteEmployeeService.execute(BigInt(request.employeeId));

    return {
      success: true,
    };
  }

  @GrpcMethod("EmployeeService", "GetEmployeeByUserId")
  async getEmployeeByUserId(request: GetEmployeeRequest): Promise<EmployeeResponse> {
    return this.getEmployeeService.getByID(request.userId);
  }

  @GrpcMethod('EmployeeService', 'GetEmployees')
  getEmployees(request: GetEmployeesRequest) {
    return this.getEmployeeService.findAll(request);
  }

  @GrpcMethod(
    "EmployeeService",
    "ListPosition",
    )
    listPosition(): Promise<ListPositionResponse> {
        return this.listPositionService.execute();
    }
  
}
