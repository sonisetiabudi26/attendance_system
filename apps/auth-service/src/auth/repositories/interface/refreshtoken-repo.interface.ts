import { Prisma, PrismaClient } from '../../../../prisma/generated/client';

import {
  CreateRefreshTokenContract,
} from '../../contracts';

import {
  RefreshTokenEntity,
} from '../../entities';

export interface IRefreshTokenRepository {
  findById(
    db: PrismaClient | Prisma.TransactionClient,
    id: bigint,
  ): Promise<RefreshTokenEntity | null>;

  findByUserId(
    db: PrismaClient | Prisma.TransactionClient,
    userId: bigint,
  ): Promise<RefreshTokenEntity | null>;

  create(
    db: PrismaClient | Prisma.TransactionClient,
    input: CreateRefreshTokenContract,
  ): Promise<RefreshTokenEntity>;

  delete(
    db: PrismaClient | Prisma.TransactionClient,
    id: bigint,
  ): Promise<void>;

  deleteByUserId(
    db: PrismaClient | Prisma.TransactionClient,
    userId: bigint,
  ): Promise<void>;

  deleteExpired(
    db: PrismaClient | Prisma.TransactionClient,
  ): Promise<number>;
upsert(
   db: PrismaClient | Prisma.TransactionClient,
    contract: CreateRefreshTokenContract,
  ): Promise<void>;
  
}