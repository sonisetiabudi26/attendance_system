import { Injectable } from "@nestjs/common";
import { BaseRepository,PrismaService } from "../../database";
import { IPositionRepository } from "./position.repository";
import { Prisma, PrismaClient } from '../../../prisma/generated/client';
import { PositionEntity } from "../entites/position.entity";
import { PositionMapper } from "../mappers/position.mapper";

@Injectable()
export class PositionPrismaRepository
  extends BaseRepository
  implements IPositionRepository
{
  constructor(
    prisma: PrismaService,
  ) {
    super(prisma);
  }

  async findById(
    db: PrismaClient | Prisma.TransactionClient,
    id: bigint,
  ): Promise<PositionEntity | null> {
    const position =
      await db.masterPosition.findUnique({
        where: {
          id,
        },
      });

    return position
      ? PositionMapper.toEntity(position)
      : null;
  }

  async findByCode(
    db: PrismaClient | Prisma.TransactionClient,
    code: string,
  ): Promise<PositionEntity | null> {
    const position =
      await db.masterPosition.findUnique({
        where: {
          code,
        },
      });

    return position
      ? PositionMapper.toEntity(position)
      : null;
  }

  async findAll(
    db: PrismaClient | Prisma.TransactionClient,
  ): Promise<PositionEntity[]> {
    const positions =
      await db.masterPosition.findMany({
        orderBy: {
          name: 'asc',
        },
      });

    return positions.map(PositionMapper.toEntity);
  }
}