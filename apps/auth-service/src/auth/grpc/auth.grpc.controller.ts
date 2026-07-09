import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthService } from '../services/auth.service';
import { LoginRequest, LoginResponse, RefreshTokenRequest, LogoutRequest, ChangePasswordRequest } from '@attendance/proto/generated/auth';
import { AuthGrpcMapper } from './authgrpc.mapper';

@Controller()
export class AuthGrpcController {
  constructor(
    private readonly authService: AuthService,
  ) { }

  @GrpcMethod('AuthService', 'Login')
  async login(
    request: LoginRequest,
  ): Promise<LoginResponse> {
     
    const result = await this.authService.login(
      AuthGrpcMapper.toLoginContract(request),
    );

    return {
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
      tokenType: result.tokenType,
      expiresIn: result.expiresIn,
    };
  }
  @GrpcMethod('AuthService', 'RefreshToken')
  async refreshToken(
    request: RefreshTokenRequest,
  ) {
    return this.authService.refresh(request.refreshToken);
  }

  @GrpcMethod('AuthService', 'Logout')
  async logout(
    request: LogoutRequest,
  ) {
    await this.authService.logout(
      BigInt(request.userId),
    );

    return {};
  }

  // @GrpcMethod('AuthService', 'ChangePassword')
  // async changePassword(
  //   request: ChangePasswordRequest,
  // ) {
  //   await this.authService.changePassword(
  //     BigInt(request.userId),
  //     request,
  //   );

  //   return {};
  // }
}