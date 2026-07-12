import { GrpcModule } from './grpc/grpc.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';
import { EmployeeModule } from './employee/employee.module';


@Module({
  imports: [
    ConfigModule,
    GrpcModule,
    EmployeeModule,
    AuthModule,
  ],
   providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})

export class ApiGatewayModule {}
