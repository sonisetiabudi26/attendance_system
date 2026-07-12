import { Inject, Injectable } from "@nestjs/common";

import { PrismaClient, Prisma } from "../../../../prisma/generated/client";

import { ILocationRepository } from "../../repositories/interface";

import { LocationEntity } from "../../entites/location.entity";

import { LOCATION_MAPPER } from "../../constants/employee.constant";

import { LocationMapper } from "../../mappers";

@Injectable()
export class LocationPrismaRepository implements ILocationRepository {
  constructor(
    @Inject(LOCATION_MAPPER)
    private readonly mapper: LocationMapper
  ) {}

  async create(
    db: PrismaClient | Prisma.TransactionClient,
    entity: LocationEntity
  ): Promise<LocationEntity> {
    const created = await db.location.create({
      data: this.mapper.toCreatePersistence(entity),
    });

    return this.mapper.toDomain(created);
  }

  async update(
    db: PrismaClient | Prisma.TransactionClient,
    entity: LocationEntity
  ): Promise<LocationEntity> {
    const updated = await db.location.update({
      where: {
        id: entity.id,
      },

      data: this.mapper.toUpdatePersistence(entity),
    });

    return this.mapper.toDomain(updated);
  }

  async findById(
    db: PrismaClient | Prisma.TransactionClient,
    id: bigint
  ): Promise<LocationEntity | null> {
    const location = await db.location.findUnique({
      where: {
        id,
      },
    });

    return location ? this.mapper.toDomain(location) : null;
  }

  async findByIds(
    db: PrismaClient | Prisma.TransactionClient,
    ids: bigint[]
  ): Promise<LocationEntity[]> {
    if (!ids.length) {
      return [];
    }

    const locations = await db.location.findMany({
      where: {
        id: {
          in: ids,
        },
      },

      orderBy: {
        locationName: "asc",
      },
    });

    return locations.map((location) => this.mapper.toDomain(location));
  }
  async findAll(
    db: PrismaClient | Prisma.TransactionClient
  ): Promise<LocationEntity[]> {
    const locations = await db.location.findMany({
      orderBy: {
        locationName: "asc",
      },
    });

    return locations.map((location) => this.mapper.toDomain(location));
  }
}
