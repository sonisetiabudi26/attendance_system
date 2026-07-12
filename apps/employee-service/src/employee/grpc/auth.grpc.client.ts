import {
  Inject,
  Injectable,
  OnModuleInit,
} from '@nestjs/common';

import type { ClientGrpc } from '@nestjs/microservices';

import { firstValueFrom } from 'rxjs';

import {
  AUTH_GRPC_CLIENT,
  AUTH_PACKAGE_NAME,
  AUTH_SERVICE_NAME,
} from '../constants/employee.constant';

import {
  CreateUserRequest,
  CreateUserResponse,
  IAuthGrpcService,
} from './auth.grpc.interface';
import { EmailAlreadyExistsException } from 'apps/auth-service/src/auth/exceptions';
import { status } from '@grpc/grpc-js';
import { UpdateCredentialRequest, UpdateCredentialResponse } from '@attendance/proto/generated/auth';
@Injectable()
export class AuthGrpcClient
  implements OnModuleInit {
  private authService: IAuthGrpcService;

  constructor(
    @Inject(AUTH_GRPC_CLIENT)
    private readonly client: ClientGrpc,
  ) { }

  onModuleInit() {
    this.authService = this.client.getService<IAuthGrpcService>(AUTH_SERVICE_NAME);
  }

  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    try {
      return await firstValueFrom(
        this.authService.createUser(request),
      );

    } catch (error: any) {
      if (error.code === status.ALREADY_EXISTS) {
        throw new EmailAlreadyExistsException();
      }
      throw error;
    }

  }
  async updateCredential(request: UpdateCredentialRequest): Promise<UpdateCredentialResponse> {
    try {
      return await firstValueFrom(
        this.authService.updateCredential(
          request,
        ),
      );
    } catch (error: any) {
      if (error.code === status.ALREADY_EXISTS) {
        throw new EmailAlreadyExistsException();
      }

      throw error;
    }

  }
  //   async updateCredential(
  //     request: UpdateCredentialRequest,
  // ): Promise<UpdateCredentialResponse> {
  //     throw new Error('Not implemented');
  // }
}