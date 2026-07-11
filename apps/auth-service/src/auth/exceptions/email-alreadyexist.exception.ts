import { ConflictException } from '@nestjs/common';

export class EmailAlreadyExistsException extends ConflictException {
  constructor() {
    super({
      code: 'AUTH_001',
      message: 'Email already exists.',
    });
  }
}