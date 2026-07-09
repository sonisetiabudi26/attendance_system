import { Module } from '@nestjs/common';
import { DatabaseModule } from '@attendance/database';
import { authProviders } from './auth.providers';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { StringValue } from 'ms';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.registerAsync({
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
export class AuthModule {}