import { Module } from '@nestjs/common';

import { AppConfigModule } from '@attendance/config';

import { PrismaModule } from './database';
import { HealthModule } from './health/health.module';
import { authValidationSchema } from '@attendance/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AppConfigModule.forRoot('auth-service',authValidationSchema),
    PrismaModule,
    HealthModule,
    AuthModule
  ],
})
export class AuthServiceModule {}