import { Injectable } from '@nestjs/common';

import {
  Prisma,
  PrismaClient,
} from '../../../../prisma/generated/client';

import { IMasterStatusRepository } from '../interface/master-status.interface';

import { MasterStatusMapper } from '../../mappers';

import { MasterStatusEntity } from '../../entities';

@Injectable()
export class MasterStatusPrismaRepository
  implements IMasterStatusRepository
{
  constructor(
    private readonly mapper: MasterStatusMapper,
  ) {}

  async findById(
    db: PrismaClient | Prisma.TransactionClient,
    id: bigint,
  ): Promise<MasterStatusEntity | null> {
    const model =
      await db.masterStatus.findUnique({
        where: {
          id,
        },
      });

    return model
      ? this.mapper.toEntity(model)
      : null;
  }

  async findByCode(
    db: PrismaClient | Prisma.TransactionClient,
    code: string,
  ): Promise<MasterStatusEntity | null> {
    const model =
      await db.masterStatus.findUnique({
        where: {
          code,
        },
      });

    return model
      ? this.mapper.toEntity(model)
      : null;
  }

  async findAll(
    db: PrismaClient | Prisma.TransactionClient,
  ): Promise<MasterStatusEntity[]> {
    const models =
      await db.masterStatus.findMany({
        orderBy: {
          id: 'asc',
        },
      });

    return this.mapper.toEntities(models);
  }
}