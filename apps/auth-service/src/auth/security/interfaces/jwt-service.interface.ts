export interface IJwtService {
  generateAccessToken(
    payload: Record<string, unknown>,
  ): Promise<string>;

  generateRefreshToken(
    payload: Record<string, unknown>,
  ): Promise<string>;

  verifyAccessToken<T extends object>(
    token: string,
  ): Promise<T>;

  verifyRefreshToken<T extends object>(
    token: string,
  ): Promise<T>;
}