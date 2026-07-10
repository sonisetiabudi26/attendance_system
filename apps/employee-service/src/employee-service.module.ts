import { Module } from '@nestjs/common';
import { EmployeeRepository } from './employee/repositories/employee.repository';
import { EmployeePrismaRepository } from './employee/repositories/employee-prisma.repository';
import { PrismaModule } from './database/prisma.module';


@Module({

  imports: [

    PrismaModule,

  ],

  providers: [

    {

      provide: EmployeeRepository,

      useClass: EmployeePrismaRepository,

    },

  ],

  exports: [

    EmployeeRepository,

  ],

})
export class EmployeeServiceModule {}
