import { Module } from '@nestjs/common';
import { EmployeePrismaRepository } from './employee/repositories/employee-prisma.repository';
import { PrismaModule } from './database/prisma.module';
import { EMPLOYEE_REPOSITORY } from './employee/constants/employee.constant';

@Module({
  imports: [PrismaModule],

  providers: [
    {
      provide: EMPLOYEE_REPOSITORY,
      useClass: EmployeePrismaRepository,
    },
  ],

  exports: [EMPLOYEE_REPOSITORY],
})
export class EmployeeServiceModule {}
