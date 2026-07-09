import { DeviceType } from '../../prisma/generated/client';

export interface LoginContract {
  usernameOrEmail: string;
  password: string;

  deviceType: DeviceType;
  deviceName?: string;
  ipAddress?: string;
  userAgent?: string;
}