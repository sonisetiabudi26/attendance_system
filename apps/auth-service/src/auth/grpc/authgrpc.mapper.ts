import {
  LoginRequest,
  LogoutRequest,
  DeviceType as ProtoDeviceType,
} from '@attendance/proto/generated/auth';

import { DeviceType } from '../../../prisma/generated/client';

import { LoginContract, LogoutContract } from '../contracts';

export class AuthGrpcMapper {
  static toLoginContract(
    request: LoginRequest,
  ): LoginContract {
    return {
      usernameOrEmail: request.usernameOrEmail,
      password: request.password,

      deviceType: this.toDeviceType(
        request.deviceType,
      ),

      deviceName: request.deviceName,
      ipAddress: request.ipAddress,
      userAgent: request.userAgent,
    };
  }
  static toLogoutContract(
    request: LogoutRequest,
  ): LogoutContract {
    return {
      userId: BigInt(request.userId),
    };
  }
  private static toDeviceType(
    type: ProtoDeviceType,
  ): DeviceType {
    switch (type) {
      case ProtoDeviceType.WEB:
        return DeviceType.WEB;

      case ProtoDeviceType.ANDROID:
        return DeviceType.ANDROID;

      case ProtoDeviceType.IOS:
        return DeviceType.IOS;

      default:
        return DeviceType.OTHER;
    }
  }
}