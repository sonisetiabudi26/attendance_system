import { Module } from '@nestjs/common';

import { AppConfigModule } from '@attendance/config';
import { DatabaseModule } from '@attendance/database';
import { LoggerModule } from '@attendance/logger';

@Module({
  imports: [
    AppConfigModule.forRoot('auth-service'),
    DatabaseModule,
    LoggerModule,
  ],
})
export class AuthServiceModule {}