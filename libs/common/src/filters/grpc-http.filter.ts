import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  InternalServerErrorException,
} from '@nestjs/common';

import {
  ExceptionRegistry,
  UnauthorizedAppException,
} from '../exceptions';

@Catch()
export class GrpcToHttpExceptionFilter
  implements ExceptionFilter
{
  catch(
    exception: any,
    host: ArgumentsHost,
  ) {
    /**
     * Kalau sudah HttpException
     * lempar lagi supaya ditangani
     * HttpExceptionFilter.
     */
    if (
      exception instanceof HttpException
    ) {
      throw exception;
    }

    throw this.mapException(
      exception,
    );
  }

  private mapException(
    exception: any,
  ): HttpException {
    if (exception.errorCode) {
      const ExceptionClass =
        ExceptionRegistry[
          exception.errorCode
        ];

      if (ExceptionClass) {
        return new ExceptionClass();
      }
    }

    switch (exception.code) {
      case 16:
        return new UnauthorizedAppException(
          'UNAUTHORIZED',
          exception.details,
        );

      default:
        return new InternalServerErrorException(
          exception.details ??
            'Internal Server Error',
        );
    }
  }
}