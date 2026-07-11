import { Inject, Injectable } from '@nestjs/common';

import {
  Prisma,
  PrismaClient,
} from '../../../../prisma/generated/client';

import {
  LocationEntity,
} from '../../entites/location.entity';

import {
  LOCATION_MAPPER,
} from '../../constants/employee.constant';

import {
  LocationMapper,
} from '../../mappers';

import {
  ILocationRepository,
} from '../interface';

@Injectable()
export class LocationPrismaRepository
  implements ILocationRepository
{
  constructor(
    // @Inject(LOCATION_MAPPER)
    private readonly mapper: LocationMapper,
  ) {}

  async findById(
    db: PrismaClient | Prisma.TransactionClient,
    id: bigint,
  ): Promise<LocationEntity | null> {
    const row =
      await db.location.findUnique({
        where: {
          id,
        },
      });

    if (!row) {
      return null;
    }

    return this.mapper.toEntity(row);
  }

  async findAll(
    db: PrismaClient | Prisma.TransactionClient,
  ): Promise<LocationEntity[]> {
    const rows =
      await db.location.findMany({
        orderBy: {
          locationName: 'asc',
        },
      });

    return this.mapper.toEntities(rows);
  }
}