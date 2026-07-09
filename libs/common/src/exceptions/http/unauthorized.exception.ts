import { HttpStatus } from '@nestjs/common';
import { AppException } from '../base';

export class UnauthorizedAppException extends AppException {
  constructor(
    code = 'UNAUTHORIZED',
    message = 'Unauthorized',
  ) {
    super(code, message, HttpStatus.UNAUTHORIZED);
  }
}