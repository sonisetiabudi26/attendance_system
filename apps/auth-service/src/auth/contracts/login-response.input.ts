export interface LoginResponseContract {
  accessToken: string;
  refreshToken: string;

  tokenType: 'Bearer';

  expiresIn: number;
}