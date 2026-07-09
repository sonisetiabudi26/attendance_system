import { Module } from '@nestjs/common';
import { PrismaModule } from '../database';
import { authProviders } from './auth.providers';
import { JwtModule } from '@nestjs/jwt';

import { StringValue } from 'ms';
import { AuthGrpcController } from './grpc/auth.grpc.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from '../../../../libs/config/src';

@Module({
    controllers: [AuthGrpcController,],
    imports: [
        PrismaModule,
        ConfigModule.forRoot({
            isGlobal: true,
             envFilePath:[
                'apps/auth-service/.env'
            ],
            load: [
                configuration,
            ],
        }),
        JwtModule.registerAsync({
            imports: [
                ConfigModule,
            ],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                
                secret: config.getOrThrow<string>('jwt.secret'),
                signOptions: {
                    expiresIn: config.getOrThrow<StringValue>('jwt.expiresIn'),
                },
            }),
        }),
    ],
    providers: [
        ...authProviders,
    ],
    exports: [
        ...authProviders,
    ],
})
export class AuthModule { }