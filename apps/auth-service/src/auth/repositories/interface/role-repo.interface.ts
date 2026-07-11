import { PrismaClient, Prisma } from '@prisma/client';

import { RoleEntity } from '../../entities';

export interface IRoleRepository {
  findById(
    db: PrismaClient | Prisma.TransactionClient,
    id: bigint,
  ): Promise<RoleEntity | null>;

  findByCode(
    db: PrismaClient | Prisma.TransactionClient,
    code: string,
  ): Promise<RoleEntity | null>;
}