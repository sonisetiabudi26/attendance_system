import { Injectable } from '@nestjs/common';
import { JwtService as NestJwtService } from '@nestjs/jwt';

import { IJwtService } from '../interfaces';
import { extend } from 'joi';

@Injectable()
export class JwtService implements IJwtService {
  constructor(
    private readonly jwtService: NestJwtService,
  ) {}

  async generateAccessToken(
    payload: Record<string, unknown>,
  ): Promise<string> {
    return this.jwtService.signAsync(payload);
  }

  async generateRefreshToken(
    payload: Record<string, unknown>,
  ): Promise<string> {
    return this.jwtService.signAsync(payload);
  }

  async verifyAccessToken<T extends object>(
    token: string,
  ): Promise<T> {
    return this.jwtService.verifyAsync<T>(token);
  }

  async verifyRefreshToken<T extends object>(
    token: string,
  ): Promise<T> {
    return this.jwtService.verifyAsync<T>(token);
  }
}