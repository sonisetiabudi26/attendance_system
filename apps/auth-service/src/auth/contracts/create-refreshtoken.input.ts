import { DeviceType } from '../../../prisma/generated/client';

export class CreateRefreshTokenContract {
  userId: bigint;

  tokenHash: string;

  deviceType: DeviceType;

  deviceName?: string;

  ipAddress?: string;

  userAgent?: string;

  expiresAt: Date;
}