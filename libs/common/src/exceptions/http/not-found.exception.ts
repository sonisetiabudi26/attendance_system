import { HttpStatus } from '@nestjs/common';
import { AppException } from '../base';

export class NotFoundAppException extends AppException {
  constructor(
    code = 'NOT_FOUND',
    message = 'Not Found',
  ) {
    super(code, message, HttpStatus.NOT_FOUND);
  }
}