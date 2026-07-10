import { Prisma, PrismaClient } from '../../../prisma/generated/client';
import { LocationEntity } from '../entites/location.entity';

export interface ILocationRepository {
  findById(
    db: PrismaClient | Prisma.TransactionClient,
    id: bigint,
  ): Promise<LocationEntity | null>;

  findAll(
    db: PrismaClient | Prisma.TransactionClient,
  ): Promise<LocationEntity[]>;
}