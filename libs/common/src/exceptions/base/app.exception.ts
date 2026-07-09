import { HttpException, HttpStatus } from '@nestjs/common';

export interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
  };
}

export abstract class AppException extends HttpException {
  constructor(
    code: string,
    message: string,
    status: HttpStatus,
  ) {
    super(
      {
        success: false,
        error: {
          code,
          message,
        },
      } satisfies ErrorResponse,
      status,
    );
  }
}