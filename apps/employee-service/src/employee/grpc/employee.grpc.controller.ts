import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import {
  CreateEmployeeRequest,
  CreateEmployeeResponse,
} from '@attendance/proto/generated/employee';

import { CreateEmployeeService } from '../services/create-employee.service';

import { EmployeeGrpcMapper } from './employee.grpc.mapper';

@Controller()
export class EmployeeGrpcController {
  constructor(
    private readonly createEmployeeService: CreateEmployeeService,
  ) {}

  @GrpcMethod('EmployeeService', 'CreateEmployee')
  async createEmployee(
    request: CreateEmployeeRequest,
  ): Promise<CreateEmployeeResponse> {
    const contract =
      EmployeeGrpcMapper.toCreateEmployeeContract(
        request,
      );

    const employee =
      await this.createEmployeeService.execute(
        contract,
      );

    return EmployeeGrpcMapper.toCreateEmployeeResponse(
      employee,
    );
  }
}