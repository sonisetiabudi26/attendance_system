import { PrismaClient, Prisma } from "../../../../prisma/generated/client";

import { LocationEntity } from "../../entites/location.entity";

export interface ILocationRepository {
  create(
     db: PrismaClient | Prisma.TransactionClient,
    entity: LocationEntity
  ): Promise<LocationEntity>;

  update(
     db: PrismaClient | Prisma.TransactionClient,
    entity: LocationEntity
  ): Promise<LocationEntity>;

  findById(
     db: PrismaClient | Prisma.TransactionClient,
    id: bigint
  ): Promise<LocationEntity | null>;
 findByIds(
     db: PrismaClient | Prisma.TransactionClient,
    ids: bigint[],
): Promise<LocationEntity[]>;

  findAll( db: PrismaClient | Prisma.TransactionClient,): Promise<LocationEntity[]>;
}
