import { Inject, Injectable } from "@nestjs/common";
import { EMPLOYEE_REPOSITORY } from "../constants/employee.constant";
import type { IEmployeeRepository } from "../repositories";
import { PrismaService } from "../../database/prisma.service";
import { GetEmployeeContract } from "../contracts/get-employee.contract";
import { EmployeeNotFoundException } from "../exceptions/employee-notfound.exception";
import { EmployeeResponse, GetEmployeesRequest, GetEmployeesResponse, ListEmployeeRequest } from "@attendance/proto/generated/employee";
import { EmployeeMapper } from "../mappers";
import { EmployeeGrpcMapper } from "../grpc/employee.grpc.mapper";
import { GetEmployeesContract } from "../contracts";

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

  async findAll(
    request: GetEmployeesRequest,
  ): Promise<GetEmployeesResponse> {

    const page = request.page || 1;
    const limit = request.limit || 10;

    const result =
      await this.employeeRepository.findAll(
        this.prisma,
        {
          page,
          limit,
          search: request.search || undefined,
          positionId: request.positionId
            ? BigInt(request.positionId)
            : undefined,
        },
      );

    return {

      employees: result.data.map(employee =>
        this.employeeMapper.toResponse(employee),
      ),

      page,

      limit,

      total: result.total,

    };

  }
}
 