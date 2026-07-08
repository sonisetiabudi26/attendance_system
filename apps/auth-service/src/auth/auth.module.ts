import { Module } from '@nestjs/common';

import { DatabaseModule } from '@attendance/database';

import { authProviders } from './auth.providers';

@Module({
  imports: [
    DatabaseModule,
  ],
  providers: [
    ...authProviders,
  ],
  exports: [
    ...authProviders,
  ],
})
export class AuthModule {}