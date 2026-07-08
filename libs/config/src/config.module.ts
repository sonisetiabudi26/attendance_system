import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configuration from './configuration';
import { validationSchema } from './env.validation';

@Global()
@Module({})
export class AppConfigModule {
  static forRoot(serviceName: string): DynamicModule {
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