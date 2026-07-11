import { Inject, Injectable } from '@nestjs/common';

import {
  Prisma,
  PrismaClient,
} from '../../../../prisma/generated/client';

import {
  PositionEntity,
} from '../../entites/position.entity';

import {
  MASTER_POSITION_MAPPER,
} from '../../constants/employee.constant';

import {
  PositionMapper,
} from '../../mappers';

import {
  IPositionRepository,
} from '../interface';

@Injectable()
export class PositionPrismaRepository
  implements IPositionRepository
{
  constructor(
    // @Inject(MASTER_POSITION_MAPPER)
    private readonly mapper: PositionMapper,
  ) {}

  async findById(
    db: PrismaClient | Prisma.TransactionClient,
    id: bigint,
  ): Promise<PositionEntity | null> {
    const row =
      await db.masterPosition.findUnique({
        where: {
          id,
        },
      });

    if (!row) {
      return null;
    }

    return this.mapper.toEntity(row);
  }

  async findByCode(
    db: PrismaClient | Prisma.TransactionClient,
    code: string,
  ): Promise<PositionEntity | null> {
    const row =
      await db.masterPosition.findUnique({
        where: {
          code,
        },
      });

    if (!row) {
      return null;
    }

    return this.mapper.toEntity(row);
  }

  async findAll(
    db: PrismaClient | Prisma.TransactionClient,
  ): Promise<PositionEntity[]> {
    const rows =
      await db.masterPosition.findMany({
        orderBy: {
          name: 'asc',
        },
      });

    return this.mapper.toEntities(rows);
  }
}