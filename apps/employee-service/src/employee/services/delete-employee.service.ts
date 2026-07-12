import { Inject, Injectable } from "@nestjs/common";
import { EMPLOYEE_REPOSITORY } from "../constants/employee.constant";
import type { IEmployeeRepository } from "../repositories";
import { PrismaService } from "../../database/prisma.service";
import { EmployeeNotFoundException } from "../exceptions/employee-notfound.exception";

@Injectable()
export class DeleteEmployeeService {

  constructor(

    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository:IEmployeeRepository,

    private readonly prisma:PrismaService,

  ){}

  async execute(
    employeeId: bigint,
  ): Promise<void>{

    const employee =
      await this.employeeRepository.findById(
        this.prisma,
        Number(employeeId),
      );

    if(!employee){

      throw new EmployeeNotFoundException();

    }

    await this.employeeRepository.softDelete(
      this.prisma,
      employeeId,
    );

  }

}