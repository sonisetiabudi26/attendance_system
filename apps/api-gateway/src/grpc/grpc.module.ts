import { Global, Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { AUTH_GRPC } from "./grpc.constant";
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
    ]),
  ],
  exports: [ClientsModule],
})
export class GrpcModule {}