import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '../../../../prisma/generated/client';

import { IRefreshTokenRepository } from '../interface/refreshtoken-repo.interface';

import { RefreshTokenMapper } from '../../mappers';

import {
  CreateRefreshTokenContract,
} from '../../contracts';

import { RefreshTokenEntity } from '../../entities';

@Injectable()
export class RefreshTokenPrismaRepository
  implements IRefreshTokenRepository
{
  constructor(
    private readonly mapper: RefreshTokenMapper,
  ) {}

  async findById(
    db: PrismaClient | Prisma.TransactionClient,
    id: bigint,
  ): Promise<RefreshTokenEntity | null> {
    const model =
      await db.refreshToken.findUnique({
        where: { id },
      });

    return model
      ? this.mapper.toEntity(model)
      : null;
  }

  async findByUserId(
    db: PrismaClient | Prisma.TransactionClient,
    userId: bigint,
  ): Promise<RefreshTokenEntity[]> {
    const models =
      await db.refreshToken.findMany({
        where: {
          userId,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

    return this.mapper.toEntities(models);
  }

  async create(
    db: PrismaClient | Prisma.TransactionClient,
    input: CreateRefreshTokenContract,
  ): Promise<RefreshTokenEntity> {
    const model =
      await db.refreshToken.create({
        data: this.mapper.toCreateInput(input),
      });

    return this.mapper.toEntity(model);
  }

  async delete(
    db: PrismaClient | Prisma.TransactionClient,
    id: bigint,
  ): Promise<void> {
    await db.refreshToken.delete({
      where: {
        id,
      },
    });
  }

  async deleteByUserId(
    db: PrismaClient | Prisma.TransactionClient,
    userId: bigint,
  ): Promise<void> {
    await db.refreshToken.deleteMany({
      where: {
        userId,
      },
    });
  }

  async deleteExpired(
    db: PrismaClient | Prisma.TransactionClient,
  ): Promise<number> {
    const result =
      await db.refreshToken.deleteMany({
        where: {
          expiresAt: {
            lt: new Date(),
          },
        },
      });

    return result.count;
  }
}