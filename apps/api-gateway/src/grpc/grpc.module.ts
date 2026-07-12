import { Global, Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { AUTH_GRPC, EMPLOYEE_GRPC } from "./grpc.constant";
import { join } from "path";

@Global()
@Module({
  imports: [
    ClientsModule.register([
      {
        name: AUTH_GRPC,
        transport: Transport.GRPC,
        options: {
          package: 'auth',
          protoPath: join(
            process.cwd(),
            'libs/proto/auth.proto',
          ),
          url: 'localhost:50051',
        },
      },
      {
        name: EMPLOYEE_GRPC,
        transport: Transport.GRPC,
        options: {
          package: 'employee',
          protoPath: join(
            process.cwd(),
            'libs/proto/employee.proto',
          ),
          url: 'localhost:50052',
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class GrpcModule {}