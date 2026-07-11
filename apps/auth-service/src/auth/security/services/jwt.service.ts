import { Injectable } from '@nestjs/common';
import { JwtService as NestJwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import {
  JsonWebTokenError,
  TokenExpiredError,
} from 'jsonwebtoken';

import { IJwtService } from '../interfaces';

import {
  AccessTokenPayload,
  RefreshTokenPayload,
} from '../../security/payloads';

import {
  InvalidRefreshTokenException,
} from '../../exceptions';

@Injectable()
export class JwtService implements IJwtService {
  constructor(
    private readonly jwtService: NestJwtService,
    private readonly config: ConfigService,
  ) { }

  async generateAccessToken(
    payload: AccessTokenPayload,
  ): Promise<string> {

    return this.jwtService.signAsync(payload, {
      expiresIn: this.config.getOrThrow(
        'jwt.expiresIn',
      ),
    });
  }

  async generateRefreshToken(
    payload: RefreshTokenPayload,
  ): Promise<string> {

    return this.jwtService.signAsync(payload, {
      expiresIn: this.config.getOrThrow('jwt.refreshExpiresIn'),
    });
  }

  async verifyAccessToken(
    token: string,
  ): Promise<AccessTokenPayload> {
    try {

      return await this.jwtService.verifyAsync<AccessTokenPayload>(
        token,
      );
    } catch (error) {
      if (
        error instanceof TokenExpiredError ||
        error instanceof JsonWebTokenError
      ) {
        throw new InvalidRefreshTokenException();
      }

      throw error;
    }
  }

  async verifyRefreshToken(
    token: string,
  ): Promise<RefreshTokenPayload> {
    try {
      return await this.jwtService.verifyAsync<RefreshTokenPayload>(
        token,
      );
    } catch (error) {
      if (
        error instanceof TokenExpiredError ||
        error instanceof JsonWebTokenError
      ) {
        throw new InvalidRefreshTokenException();
      }

      throw error;
    }
  }
   getRefreshExpiredDate(): Date {
    const expires =
      this.config.get<string>(
        'JWT_REFRESH_EXPIRES_IN',
      ) ?? '7d';

    const now = new Date();

    const value = Number.parseInt(expires);

    if (expires.endsWith('d')) {
      now.setDate(now.getDate() + value);
    } else if (expires.endsWith('h')) {
      now.setHours(now.getHours() + value);
    } else if (expires.endsWith('m')) {
      now.setMinutes(now.getMinutes() + value);
    } else if (expires.endsWith('s')) {
      now.setSeconds(now.getSeconds() + value);
    }

    return now;
  }

}