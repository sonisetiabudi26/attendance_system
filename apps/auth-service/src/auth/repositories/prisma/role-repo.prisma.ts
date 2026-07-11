import { Injectable } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';

import { IRoleRepository } from '../interface/role-repo.interface';

import { RoleEntity } from '../../entities';

import { RoleMapper } from '../../mappers';

@Injectable()
export class RolePrismaRepository
  implements IRoleRepository
{
    constructor(
            private readonly mapper: RoleMapper,
        ) { }

  async findById(
    db: PrismaClient | Prisma.TransactionClient,
    id: bigint,
  ): Promise<RoleEntity | null> {
    const role = await db.role.findUnique({
      where: { id },
    });

     return this.mapper.toEntity(role);
  }

  async findByCode(
    db: PrismaClient | Prisma.TransactionClient,
    code: string,
  ): Promise<RoleEntity | null> {
    const role = await db.role.findFirst({
      where: {
        code,
      },
    });

     return this.mapper.toEntity(role);
  }
}