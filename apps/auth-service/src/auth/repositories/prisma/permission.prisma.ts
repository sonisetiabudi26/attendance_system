import { Prisma, PrismaClient } from "@prisma/client";
import { PermissionEntity } from "../../entities";
import { PermissionMapper } from "../../mappers/permission.mapper";
import { IPermissionRepository } from "../interface/permission.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PermissionPrismaRepository
  implements IPermissionRepository
{
  constructor(
    private readonly mapper: PermissionMapper,
  ) {}

  async findById(
    db: PrismaClient | Prisma.TransactionClient,
    id: bigint,
  ): Promise<PermissionEntity | null> {
    const permission =
      await db.permission.findUnique({
        where: { id },
      });

    return permission
      ? this.mapper.toEntity(permission)
      : null;
  }

  async findByCode(
    db: PrismaClient | Prisma.TransactionClient,
    code: string,
  ): Promise<PermissionEntity | null> {
    const permission =
      await db.permission.findUnique({
        where: { code },
      });

    return permission
      ? this.mapper.toEntity(permission)
      : null;
  }

  async findAll(
    db: PrismaClient | Prisma.TransactionClient,
  ): Promise<PermissionEntity[]> {
    const permissions =
      await db.permission.findMany({
        orderBy: {
          code: 'asc',
        },
      });

    return this.mapper.toEntities(
      permissions,
    );
  }
}