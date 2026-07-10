import {
  Inject,
  Injectable,
  OnModuleInit,
} from '@nestjs/common';

import type { ClientGrpc } from '@nestjs/microservices';

import { firstValueFrom } from 'rxjs';

import {
  AUTH_PACKAGE_NAME,
  AUTH_SERVICE_NAME,
} from '../constants/employee.constant';

import {
  CreateUserRequest,
  CreateUserResponse,
  IAuthGrpcService,
} from './auth.grpc.interface';

@Injectable()
export class AuthGrpcClient
  implements OnModuleInit
{
  private authService: IAuthGrpcService;

  constructor(
    @Inject(AUTH_PACKAGE_NAME)
    private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.authService =
      this.client.getService<IAuthGrpcService>(
        AUTH_SERVICE_NAME,
      );
  }

  async createUser(
    request: CreateUserRequest,
  ): Promise<CreateUserResponse> {
    return firstValueFrom(
      this.authService.createUser(request),
    );
  }
}