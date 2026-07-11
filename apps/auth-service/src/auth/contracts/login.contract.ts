import { DeviceType } from '../../../prisma/generated/client';

export interface LoginContract {
  email: string;
  password: string;

  deviceType: DeviceType;
  deviceName?: string;
  ipAddress?: string;
  userAgent?: string;
}