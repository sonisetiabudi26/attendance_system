import {
  ArgumentsHost,
  Catch,
  HttpException,
} from '@nestjs/common';

import {
  BaseRpcExceptionFilter,
  RpcException,
} from '@nestjs/microservices';

import { status } from '@grpc/grpc-js';

@Catch(HttpException)
export class GrpcExceptionFilter extends BaseRpcExceptionFilter {
  override catch(
    exception: HttpException,
    host: ArgumentsHost,
  ) {
    const response = exception.getResponse() as any;

    return super.catch(
      new RpcException({
        errorCode: response.error.code,
        code: this.mapStatus(exception.getStatus()),
        message:
          response?.error?.message ??
          exception.message,
      }),
      host,
    );
  }

  private mapStatus(statusCode: number): number {
    switch (statusCode) {
      case 400:
        return status.INVALID_ARGUMENT;

      case 401:
        return status.UNAUTHENTICATED;

      case 403:
        return status.PERMISSION_DENIED;

      case 404:
        return status.NOT_FOUND;

      case 409:
        return status.ALREADY_EXISTS;

      default:
        return status.INTERNAL;
    }
  }
}