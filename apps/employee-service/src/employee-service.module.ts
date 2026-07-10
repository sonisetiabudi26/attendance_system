import { Module } from '@nestjs/common';
import { EmployeePrismaRepository } from './employee/repositories/employee-prisma.repository';
import { PrismaModule } from './database/prisma.module';
import { AUTH_PACKAGE_NAME, EMPLOYEE_REPOSITORY, LOCATION_REPOSITORY, POSITION_REPOSITORY } from './employee/constants/employee.constant';
import { PositionPrismaRepository } from './employee/repositories/position-prisma.repository';
import { LocationPrismaRepository } from './employee/repositories/location-prisma.repository';
import { AuthGrpcClient } from './employee/grpc/auth.grpc.client';
import { CreateEmployeeService } from './employee/services/create-employee.service';
import { join } from 'path';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: AUTH_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          package: AUTH_PACKAGE_NAME,
          protoPath: join(
            process.cwd(),
            'libs/proto/auth.proto',
          ),
          url: process.env.AUTH_GRPC_URL,
        },
      },
    ]),
  ],

  providers: [
    AuthGrpcClient,

    CreateEmployeeService,

    {
      provide: EMPLOYEE_REPOSITORY,
      useClass: EmployeePrismaRepository,
    },

    {
      provide: POSITION_REPOSITORY,
      useClass: PositionPrismaRepository,
    },
  ],

  exports: [AuthGrpcClient],
})
export class EmployeeServiceModule {}
