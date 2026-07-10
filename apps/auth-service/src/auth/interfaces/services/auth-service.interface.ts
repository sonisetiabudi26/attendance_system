import { VerifyAccessTokenResponse } from '@attendance/proto/generated/auth';
import { LoginContract, LoginResponseContract, LogoutContract } from '../../contracts';

// import { ChangePasswordRequestDto } from '../dto/request';

export interface IAuthService {
  login(
    contract: LoginContract,
  ): Promise<LoginResponseContract>;

  refresh(
    refreshToken: string,
  ): Promise<LoginResponseContract>;

  logout(
    contract: LogoutContract,
  ): Promise<void>;

  verifyAccessToken(
    token: string,
  ): Promise<VerifyAccessTokenResponse>;

  changePassword(
    userId: bigint,
    oldPassword: string,
    newPassword: string,
  ): Promise<void>;

  //   changePassword(
  //     userId: bigint,
  //     dto: ChangePasswordRequestDto,
  //   ): Promise<void>;
}