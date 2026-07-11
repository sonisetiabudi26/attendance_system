import { DeviceType } from '../../../prisma/generated/client';


export interface CreateRefreshTokenContract {
  userId: bigint;

  tokenHash: string;

  deviceType: DeviceType;

  deviceName?: string;

  ipAddress?: string;

  userAgent?: string;

  expiresAt: Date;
}