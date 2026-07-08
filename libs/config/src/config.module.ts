import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ObjectSchema } from 'joi';

import configuration from './configuration';

@Global()
@Module({})
export class AppConfigModule {
  static forRoot(
    serviceName: string,
    validationSchema: ObjectSchema,
  ): DynamicModule {
    return {
      module: AppConfigModule,
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          cache: true,
          expandVariables: true,
          envFilePath: `apps/${serviceName}/.env`,
          load: [configuration],
          validationSchema,
        }),
      ],
      exports: [ConfigModule],
    };
  }
}