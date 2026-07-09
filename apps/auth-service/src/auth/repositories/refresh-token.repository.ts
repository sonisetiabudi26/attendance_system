import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database';

import { RefreshTokenEntity } from '../entities';
import { CreateRefreshTokenContract } from '../contracts';
import { RefreshTokenMapper } from '../mappers';
import { IRefreshTokenRepository } from '../interfaces/repository';

@Injectable()
export class RefreshTokenRepository
  implements IRefreshTokenRepository
{
  constructor(
    private readonly prisma: PrismaService,
    private readonly mapper: RefreshTokenMapper,
  ) {}

  async findByUserId(
    userId: bigint,
  ): Promise<RefreshTokenEntity | null> {
    const refreshToken =
      await this.prisma.refreshToken.findUnique({
        where: {
          userId,
        },
      });

    if (!refreshToken) {
      return null;
    }

    return this.mapper.toEntity(refreshToken);
  }

  async upsert(
    model: CreateRefreshTokenContract,
  ): Promise<RefreshTokenEntity> {
    const refreshToken =
      await this.prisma.refreshToken.upsert({
        where: {
          userId: model.userId,
        },
        update: {
          tokenHash: model.tokenHash,
          deviceType: model.deviceType,
          deviceName: model.deviceName,
          ipAddress: model.ipAddress,
          userAgent: model.userAgent,
          expiresAt: model.expiresAt,
        },
        create: {
          userId: model.userId,
          tokenHash: model.tokenHash,
          deviceType: model.deviceType,
          deviceName: model.deviceName,
          ipAddress: model.ipAddress,
          userAgent: model.userAgent,
          expiresAt: model.expiresAt,
        },
      });

    return this.mapper.toEntity(refreshToken);
  }

  async deleteByUserId(
    userId: bigint,
  ): Promise<void> {
    await this.prisma.refreshToken.deleteMany({
      where: {
        userId,
      },
    });
  }
}