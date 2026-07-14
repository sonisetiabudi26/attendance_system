import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
// import { LoginService } from '../services/auth.service';
import { LoginRequest, LoginResponse, RefreshTokenRequest, LogoutRequest, ChangePasswordRequest, Empty, VerifyAccessTokenRequest, VerifyAccessTokenResponse, CreateUserRequest, CreateUserResponse, UpdateCredentialRequest, UpdateCredentialResponse } from '@attendance/proto/generated/auth';
import { AuthGrpcMapper } from './authgrpc.mapper';

import { CreateUserService, LoginService, LogoutService } from '../services';
import { UpdateCredentialService } from '../services/update-credential.service';
import { VerifyAccessTokenService } from '..//services/verify-token.service';
import { RefreshTokenService } from '../services/refresh-token';
import { GetUsersByIdsService } from '../services/get-user-byid.service';
import {
    GetUsersByIdsRequest,
    GetUsersByIdsResponse,
} from "@attendance/proto/generated/auth";
@Controller()
export class AuthGrpcController {
  constructor(
    private readonly verifyTokenService: VerifyAccessTokenService,
    private readonly loginService: LoginService,
    private readonly createUserService: CreateUserService,
    private readonly updateCredentialService: UpdateCredentialService,
    private readonly logoutService: LogoutService,
    private readonly refreshTokenService: RefreshTokenService,
    private readonly getUsersByIdsService:GetUsersByIdsService,

  ) { }

  @GrpcMethod('AuthService', 'Login')
  async login(
    request: LoginRequest,
  ): Promise<LoginResponse> {

    const result = await this.loginService.execute(
      AuthGrpcMapper.toLoginContract(request),
    );

    return {
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
      tokenType: result.tokenType,
      expiresIn: result.expiresIn,
    };
  }

  @GrpcMethod('AuthService', 'CreateUser')
  async createUser(
    request: CreateUserRequest,
  ): Promise<CreateUserResponse> {

    const contract =
      AuthGrpcMapper.toCreateUserContract(request);

    const user =
      await this.createUserService.execute(contract);

    return AuthGrpcMapper.toCreateUserResponse(user);
  }

  @GrpcMethod(
    'AuthService',
    'UpdateCredential',
  )
  async updateCredential(
    request: UpdateCredentialRequest,
  ): Promise<UpdateCredentialResponse> {

    const user =
      await this.updateCredentialService.execute(

        AuthGrpcMapper.toUpdateCredentialContract(
          request,
        ),

      );

    return AuthGrpcMapper.toUpdateCredentialResponse(
      user,
    );

  }
  @GrpcMethod('AuthService', 'RefreshToken')
  async refreshToken(
    request: RefreshTokenRequest,
  ): Promise<LoginResponse> {

    const result =
      await this.refreshTokenService.execute(
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

    await this.logoutService.execute(
      request
    );

    return {
       success: true,
    };
  }

  @GrpcMethod('AuthService', 'VerifyAccessToken')
  async verifyAccessToken(
    request: VerifyAccessTokenRequest,
  ): Promise<VerifyAccessTokenResponse> {
    return this.verifyTokenService.execute(
      request.accessToken,
    );
  }

  @GrpcMethod(
    "AuthService",
    "GetUsersByIds",
)
GetUsersByIds(
    request: GetUsersByIdsRequest,
): Promise<GetUsersByIdsResponse> {

    return this.getUsersByIdsService.execute(
        request,
    );

}
  // @GrpcMethod(
  //   'AuthService',
  //   'ChangePassword',
  // )
  // async changePassword(
  //   request: ChangePasswordRequest,
  // ): Promise<Empty> {
  //   await this.authService.changePassword(
  //     BigInt(request.userId),
  //     request.oldPassword,
  //     request.newPassword,
  //   );

  //   return {};
  // }

}