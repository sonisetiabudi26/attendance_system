import { NestFactory } from '@nestjs/core';
import { EmployeeServiceModule } from './employee-service.module';
import {
  AppValidationPipe,GrpcExceptionFilter
} from '@attendance/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { EmployeeModule } from './employee/employee.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  EmployeeModule,
  {
    transport: Transport.GRPC,
    options: {
      package: 'employee',
      protoPath: join(process.cwd(), 'libs/proto/employee.proto'),
      url: '0.0.0.0:50052',
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
