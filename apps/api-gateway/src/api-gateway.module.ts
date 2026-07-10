import { GrpcModule } from './grpc/grpc.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule,

    GrpcModule,

    AuthModule,
  ],
})

export class ApiGatewayModule {}
