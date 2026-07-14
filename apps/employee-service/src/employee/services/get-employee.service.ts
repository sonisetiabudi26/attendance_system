import { Inject, Injectable } from "@nestjs/common";
import { EMPLOYEE_REPOSITORY } from "../constants/employee.constant";
import type { IEmployeeRepository } from "../repositories";
import { PrismaService } from "../../database/prisma.service";
import { GetEmployeeContract } from "../contracts/get-employee.contract";
import { EmployeeNotFoundException } from "../exceptions/employee-notfound.exception";
import { EmployeeResponse } from "@attendance/proto/generated/employee";
import { EmployeeMapper } from "../mappers";
import { EmployeeGrpcMapper } from "../grpc/employee.grpc.mapper";

@Injectable()
export class GetEmployeeService {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository: IEmployeeRepository,

    private readonly prisma: PrismaService,
     private readonly employeeMapper: EmployeeGrpcMapper
  ) {}

  async execute(id: number): Promise<EmployeeResponse> {
    const employee = await this.employeeRepository.findById(this.prisma, id);

    if (!employee) {
      throw new EmployeeNotFoundException();
    }

    return this.employeeMapper.toResponse(employee);
  }
   async getByID(id: number): Promise<EmployeeResponse> {
    const employee = await this.employeeRepository.findByUserId(this.prisma, id);

    if (!employee) {
      throw new EmployeeNotFoundException();
    }

    return this.employeeMapper.toResponse(employee);
  }
}
 