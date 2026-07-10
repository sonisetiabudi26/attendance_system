import { GrpcModule } from './grpc/grpc.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';


@Module({
  imports: [
    ConfigModule,

    GrpcModule,

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
