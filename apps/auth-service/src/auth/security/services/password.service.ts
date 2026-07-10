import { Injectable } from '@nestjs/common';

import * as argon2 from 'argon2';

import { IPasswordService } from '../interfaces';

@Injectable()
export class PasswordService implements IPasswordService {
  async hash(password: string): Promise<string> {
    return argon2.hash(password);
  }

  async verify(
    hash: string,
    password: string,
  ): Promise<boolean> {
    return argon2.verify(hash, password);
  }

  async compare(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return argon2.verify(
      hashedPassword,
      plainPassword,
    );
  }
}