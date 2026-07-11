import { Module } from '@nestjs/common';

import { AppConfigModule } from '@attendance/config';

import { PrismaModule } from './database/prisma.module';
// import { HealthModule } from './health/health.module';
import { authValidationSchema } from '@attendance/config';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    AppConfigModule.forRoot('employee-service',authValidationSchema),
    PrismaModule,
    // HealthModule,
    EmployeeModule
  ],
})
export class EmployeeServiceModule {}
