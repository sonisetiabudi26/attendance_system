import { LoginContract, LoginResponseContract } from '../../contracts';
import { LoginDto } from '../../dto/request/login-req.dto';
import { LoginResponseDto } from '../../dto/response/login-resp.dto';
// import { ChangePasswordRequestDto } from '../dto/request';

export interface IAuthService {
   login(
    contract: LoginContract,
  ): Promise<LoginResponseContract>;

  refresh(
    refreshToken: string,
  ): Promise<LoginResponseContract>;

  logout(
    userId: bigint,
  ): Promise<void>;

//   changePassword(
//     userId: bigint,
//     dto: ChangePasswordRequestDto,
//   ): Promise<void>;
}