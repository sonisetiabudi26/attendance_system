import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";

import {
  CreateEmployeeRequest,
  CreateEmployeeResponse,
  EmployeeResponse,
  GetEmployeeRequest,
  UpdateEmployeeRequest,
  UpdateEmployeeResponse,
} from "@attendance/proto/generated/employee";

import { CreateEmployeeService } from "../services/create-employee.service";

import { EmployeeGrpcMapper } from "./employee.grpc.mapper";
import { UpdateEmployeeService } from "../services/update-employee.service";
import { GetEmployeeService } from "../services/get-employee.service";

@Controller()
export class EmployeeGrpcController {
  constructor(
    private readonly createEmployeeService: CreateEmployeeService,
    private readonly updateEmployeeService: UpdateEmployeeService,
    private readonly getEmployeeService: GetEmployeeService
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
    return this.getEmployeeService.execute(BigInt(request.employeeId));
  }
}
