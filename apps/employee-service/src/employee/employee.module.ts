import { Module } from '@nestjs/common';
import { PrismaModule } from '../database';
import { employeeProviders } from './employee.providers';
import { JwtModule } from '@nestjs/jwt';

import { StringValue } from 'ms';
// import { AuthGrpcController } from './grpc/auth.grpc.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from '../../../../libs/config/src';
import { EmployeeGrpcController } from './grpc/employee.grpc.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
    controllers: [EmployeeGrpcController],
    imports: [
        PrismaModule,
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [
                'apps/employee-service/.env'
            ],
            load: [
                configuration,
            ],
        }),
        ClientsModule.register([
            {
                name: 'AUTH_GRPC_CLIENT',
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
    providers: [
        ...employeeProviders,
    ],
    exports: [
        ...employeeProviders,
    ],
})
export class EmployeeModule { }