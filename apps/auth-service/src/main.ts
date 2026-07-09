import { NestFactory } from '@nestjs/core';
import { AuthServiceModule } from './auth-service.module';
import {
  AppValidationPipe,GrpcExceptionFilter
} from '@attendance/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AuthModule } from './auth/auth.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  AuthModule,
  {
    transport: Transport.GRPC,
    options: {
      package: 'auth',
      protoPath: join(process.cwd(), 'libs/proto/auth.proto'),
      url: '0.0.0.0:50051',
    },
  },
);
app.useGlobalPipes(new AppValidationPipe());
app.useGlobalFilters(
  new GrpcExceptionFilter(),
);

await app.listen();
}
bootstrap();
