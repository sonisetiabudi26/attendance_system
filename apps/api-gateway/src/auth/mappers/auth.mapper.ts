import {
  LoginDto,
} from '../dto/login.dto';

import {
  LoginRequest,
} from '@attendance/proto/generated/auth';

export class AuthMapper {
  static toLoginRequest(
    dto: LoginDto,
  ): LoginRequest {
    return {
      usernameOrEmail: dto.usernameOrEmail,
      password: dto.password,
      deviceType: dto.deviceType,
      deviceName: dto.deviceName,
      ipAddress: dto.ipAddress,
      userAgent: dto.userAgent,
    };
  }
}