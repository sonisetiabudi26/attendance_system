import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateEmployeeContract,
  CreateEmployeeRepoContract,
  UpdateEmployeeContract,
} from '../../contracts';

import { EmployeeEntity } from '../../entites/employee.entity';

export interface IEmployeeRepository {
  findById(
    db: PrismaClient | Prisma.TransactionClient,
    id: bigint,
  ): Promise<EmployeeEntity | null>;

  findByEmployeeNo(
    db: PrismaClient | Prisma.TransactionClient,
    employeeNo: string,
  ): Promise<EmployeeEntity | null>;

  findByUserId(
    db: PrismaClient | Prisma.TransactionClient,
    userId: bigint,
  ): Promise<EmployeeEntity | null>;

  existsByEmployeeNo(
    db: PrismaClient | Prisma.TransactionClient,
    employeeNo: string,
  ): Promise<boolean>;

  create(
    db: PrismaClient | Prisma.TransactionClient,
    contract: CreateEmployeeRepoContract,
  ): Promise<EmployeeEntity>;

  update(
    db: PrismaClient | Prisma.TransactionClient,
    employeeId: bigint,
    contract: UpdateEmployeeContract,
  ): Promise<EmployeeEntity>;

  updateUserId(
    db: PrismaClient | Prisma.TransactionClient,
    employeeId: bigint,
    userId: bigint,
  ): Promise<void>;

  delete(
    db: PrismaClient | Prisma.TransactionClient,
    employeeId: bigint,
  ): Promise<void>;
}