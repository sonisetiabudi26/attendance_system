import { Inject, Injectable } from "@nestjs/common";
import { EMPLOYEE_REPOSITORY } from "../constants/employee.constant";
import type { IEmployeeRepository } from "../repositories/employee.repository";
import { PrismaService } from "../../database";

@Injectable()
export class CreateEmployeeService {

  constructor(

    @Inject(EMPLOYEE_REPOSITORY)
    private readonly repository: IEmployeeRepository,

    // private readonly authClient: AuthClient,

    // private readonly rabbitPublisher: RabbitPublisher,

    private readonly prisma: PrismaService,

  ) {
   
  }

}