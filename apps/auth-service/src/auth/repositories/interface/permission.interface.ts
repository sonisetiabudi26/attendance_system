import { Prisma, PrismaClient } from "@prisma/client";
import { PermissionEntity } from "../../entities";

export interface IPermissionRepository {
  findById(
    db: PrismaClient | Prisma.TransactionClient,
    id: bigint,
  ): Promise<PermissionEntity | null>;

  findByCode(
    db: PrismaClient | Prisma.TransactionClient,
    code: string,
  ): Promise<PermissionEntity | null>;

  findAll(
    db: PrismaClient | Prisma.TransactionClient,
  ): Promise<PermissionEntity[]>;
}