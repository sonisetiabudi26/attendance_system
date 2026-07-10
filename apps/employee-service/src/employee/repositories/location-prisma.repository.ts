import { Injectable } from "@nestjs/common";
import { BaseRepository,PrismaService } from "../../database";
import { ILocationRepository } from "./location.repository";
import { Prisma, PrismaClient } from '../../../prisma/generated/client';
import { LocationEntity } from "../entites/location.entity";
import { LocationMapper } from "../mappers/location.mapper";

@Injectable()
export class LocationPrismaRepository
  extends BaseRepository
  implements ILocationRepository
{
  constructor(
    prisma: PrismaService,
  ) {
    super(prisma);
  }

  async findById(
    db: PrismaClient | Prisma.TransactionClient,
    id: bigint,
  ): Promise<LocationEntity | null> {
    const location =
      await db.location.findUnique({
        where: {
          id,
        },
      });

    return location
      ? LocationMapper.toEntity(location)
      : null;
  }

  async findAll(
    db: PrismaClient | Prisma.TransactionClient,
  ): Promise<LocationEntity[]> {
    const locations =
      await db.location.findMany({
        orderBy: {
          locationName: 'asc',
        },
      });

    return locations.map(LocationMapper.toEntity);
  }
}