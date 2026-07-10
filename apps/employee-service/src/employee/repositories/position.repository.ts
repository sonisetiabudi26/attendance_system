import { Prisma, PrismaClient } from '../../../prisma/generated/client';
import { PositionEntity } from '../entites/position.entity';

export interface IPositionRepository {
  findById(
    db: PrismaClient | Prisma.TransactionClient,
    id: bigint,
  ): Promise<PositionEntity | null>;

  findByCode(
    db: PrismaClient | Prisma.TransactionClient,
    code: string,
  ): Promise<PositionEntity | null>;

  findAll(
    db: PrismaClient | Prisma.TransactionClient,
  ): Promise<PositionEntity[]>;
}