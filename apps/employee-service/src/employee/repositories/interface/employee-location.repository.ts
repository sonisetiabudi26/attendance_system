import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateEmployeeLocationContract,
} from '../../contracts';

import {
  EmployeeLocationEntity,
} from '../../entites/employee-location.entity';

export interface IEmployeeLocationRepository {

  findByEmployeeId(
    db: PrismaClient | Prisma.TransactionClient,
    employeeId: bigint,
  ): Promise<EmployeeLocationEntity[]>;

  create(
    db: PrismaClient | Prisma.TransactionClient,
    contract: CreateEmployeeLocationContract,
  ): Promise<EmployeeLocationEntity>;

  deleteByEmployeeId(
    db: PrismaClient | Prisma.TransactionClient,
    employeeId: bigint,
  ): Promise<void>;


// deleteMany(
//     db:PrismaClient | Prisma.TransactionClient,
//     employeeId: bigint,
//     locationIds: bigint[],
// ): Promise<void>;

// createMany(
//     db: PrismaClient | Prisma.TransactionClient,
//     employeeId: bigint,
//     locationIds: bigint[],
// ): Promise<void>;


deleteByEmployeeAndLocationIds(
   db: PrismaClient | Prisma.TransactionClient,
  employeeId: bigint,
  locationIds: bigint[],
): Promise<void>;

createMany(
   db: PrismaClient | Prisma.TransactionClient,
  employeeId: bigint,
  locationIds: bigint[],
): Promise<void>;
syncLocations(
     db: PrismaClient | Prisma.TransactionClient,
    employeeId: bigint,
    locationIds: bigint[]
): Promise<void>

}