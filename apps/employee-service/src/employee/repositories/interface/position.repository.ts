import { PositionResponse } from "@attendance/proto/generated/employee";
import { PrismaClient, Prisma } from "../../../../prisma/generated/client";

import { PositionEntity } from "../../entites/position.entity";

export interface IPositionRepository {
  create(
    db: PrismaClient | Prisma.TransactionClient,
    entity: PositionEntity
  ): Promise<PositionEntity>;

  update(
    db: PrismaClient | Prisma.TransactionClient,
    entity: PositionEntity
  ): Promise<PositionEntity>;

  findById(
    db: PrismaClient | Prisma.TransactionClient,
    id: bigint
  ): Promise<PositionEntity | null>;

  findByCode(
    db: PrismaClient | Prisma.TransactionClient,
    code: string
  ): Promise<PositionEntity | null>;

  findAll(
    db: PrismaClient | Prisma.TransactionClient
  ): Promise<PositionEntity[]>;

}
