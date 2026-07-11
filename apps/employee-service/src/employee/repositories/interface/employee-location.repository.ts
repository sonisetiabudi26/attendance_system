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
}