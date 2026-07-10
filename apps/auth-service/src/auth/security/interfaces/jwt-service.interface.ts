import {
  AccessTokenPayload,
  RefreshTokenPayload,
} from '../payloads';

export interface IJwtService {
  generateAccessToken(
    payload: AccessTokenPayload,
  ): Promise<string>;

  generateRefreshToken(
    payload: RefreshTokenPayload,
  ): Promise<string>;

  verifyAccessToken(
    token: string,
  ): Promise<AccessTokenPayload>;

  verifyRefreshToken(
    token: string,
  ): Promise<RefreshTokenPayload>;
}