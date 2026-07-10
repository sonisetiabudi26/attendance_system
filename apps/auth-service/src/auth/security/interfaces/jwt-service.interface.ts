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

  verifyRefreshToken(
    token: string,
  ): Promise<RefreshTokenPayload>;

  verifyAccessToken(
        token: string,
    ): Promise<AccessTokenPayload>;
}