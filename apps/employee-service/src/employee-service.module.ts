import { Module } from '@nestjs/common';
import { EmployeePrismaRepository } from './employee/repositories/employee-prisma.repository';
import { PrismaModule } from './database/prisma.module';
import { EMPLOYEE_REPOSITORY, LOCATION_REPOSITORY, POSITION_REPOSITORY } from './employee/constants/employee.constant';
import { PositionPrismaRepository } from './employee/repositories/position-prisma.repository';
import { LocationPrismaRepository } from './employee/repositories/location-prisma.repository';

@Module({
  imports: [PrismaModule],

  providers: [
    {
      provide: EMPLOYEE_REPOSITORY,
      useClass: EmployeePrismaRepository,
    },
    {
      provide: POSITION_REPOSITORY,
      useClass: PositionPrismaRepository,
    },
    {
      provide: LOCATION_REPOSITORY,
      useClass: LocationPrismaRepository,
    },
  ],

  exports: [
    EMPLOYEE_REPOSITORY,
    POSITION_REPOSITORY,
    LOCATION_REPOSITORY,
  ],
})
export class EmployeeServiceModule {}
