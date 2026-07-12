import { Inject, Injectable } from "@nestjs/common";

import { PrismaClient,Prisma } from "../../../../prisma/generated/client";

import { POSITION_REPOSITORY, MASTER_POSITION_MAPPER } from "../../constants/employee.constant";

import { IPositionRepository } from "../interface/position.repository";

import { PositionEntity } from "../../entites/position.entity";

import { MasterPositionMapper } from "../../mappers";

@Injectable()
export class PositionPrismaRepository implements IPositionRepository {
  constructor(
    @Inject(MASTER_POSITION_MAPPER)
    private readonly mapper: MasterPositionMapper
  ) {}

  async create(
    db: PrismaClient | Prisma.TransactionClient,
    entity: PositionEntity
  ): Promise<PositionEntity> {
    const created = await db.masterPosition.create({
      data: this.mapper.toCreatePersistence(entity),
    });

    return this.mapper.toDomain(created);
  }

  async update(
    db: PrismaClient | Prisma.TransactionClient,
    entity: PositionEntity
  ): Promise<PositionEntity> {
    const updated = await db.masterPosition.update({
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
  ): Promise<PositionEntity | null> {
    const position = await db.masterPosition.findUnique({
      where: {
        id,
      },
    });

    return position ? this.mapper.toDomain(position) : null;
  }

  async findByCode(
    db: PrismaClient | Prisma.TransactionClient,
    code: string
  ): Promise<PositionEntity | null> {
    const position = await db.masterPosition.findUnique({
      where: {
        code,
      },
    });

    return position ? this.mapper.toDomain(position) : null;
  }

  async findAll(db: PrismaClient | Prisma.TransactionClient): Promise<PositionEntity[]> {
    const positions = await db.masterPosition.findMany({
      orderBy: {
        name: "asc",
      },
    });

    return positions.map((position) => this.mapper.toDomain(position));
  }
}
