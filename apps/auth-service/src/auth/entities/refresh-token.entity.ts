import { DeviceType } from '../../../prisma/generated/client';

export class RefreshTokenEntity {
  constructor(
    public readonly id: bigint,

    public readonly userId: bigint,

    public readonly tokenHash: string,

    public readonly deviceType: DeviceType,

    public readonly deviceName: string | null,

    public readonly ipAddress: string | null,

    public readonly userAgent: string | null,

    public readonly expiresAt: Date,

    public readonly createdAt: Date,

    public readonly updatedAt: Date,
  ) {}
}