import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthService } from '../services/auth.service';
import { LoginRequest, LoginResponse, RefreshTokenRequest, LogoutRequest, ChangePasswordRequest, Empty, VerifyAccessTokenRequest, VerifyAccessTokenResponse } from '@attendance/proto/generated/auth';
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
  ): Promise<LoginResponse> {

    const result =
      await this.authService.refresh(
        request.refreshToken,
      );

    return {
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
      tokenType: result.tokenType,
      expiresIn: result.expiresIn,
    };
  }

  @GrpcMethod('AuthService', 'Logout')
  async logout(
    request: LogoutRequest,
  ): Promise<Empty> {

    await this.authService.logout(
      AuthGrpcMapper.toLogoutContract(request),
    );

    return {};
  }

  @GrpcMethod('AuthService', 'VerifyAccessToken')
  async verifyAccessToken(
    request: VerifyAccessTokenRequest,
  ): Promise<VerifyAccessTokenResponse> {
    return this.authService.verifyAccessToken(
      request.accessToken,
    );
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