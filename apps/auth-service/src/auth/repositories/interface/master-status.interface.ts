import { Prisma, PrismaClient } from '../../../../prisma/generated/client';

import { MasterStatusEntity } from '../../entities';

export interface IMasterStatusRepository {
  findById(
    db: PrismaClient | Prisma.TransactionClient,
    id: bigint,
  ): Promise<MasterStatusEntity | null>;

  findByCode(
    db: PrismaClient | Prisma.TransactionClient,
    code: string,
  ): Promise<MasterStatusEntity | null>;

  findAll(
    db: PrismaClient | Prisma.TransactionClient,
  ): Promise<MasterStatusEntity[]>;
}