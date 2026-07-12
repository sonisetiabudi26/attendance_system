import { PrismaClient, Prisma } from "../../../../prisma/generated/client";

import { EmployeeLocationEntity } from '../../entites/employee-location.entity';

export interface IEmployeeLocationRepository {

  createMany(
    db: PrismaClient | Prisma.TransactionClient,
    employeeId: bigint,
    locationIds: bigint[],
): Promise<void>;

  replace(
    db: PrismaClient | Prisma.TransactionClient,
    employeeId: bigint,
    entities: EmployeeLocationEntity[],
  ): Promise<void>;

  findByEmployeeId(
    db: PrismaClient | Prisma.TransactionClient,
    employeeId: bigint,
  ): Promise<EmployeeLocationEntity[]>;

  deleteByEmployeeId(
    db: PrismaClient | Prisma.TransactionClient,
    employeeId: bigint,
  ): Promise<void>;


   deleteByEmployeeAndLocationIds(
  db: PrismaClient | Prisma.TransactionClient,
    employeeId: bigint,
    locationIds: bigint[],
  ): Promise<void>;

}