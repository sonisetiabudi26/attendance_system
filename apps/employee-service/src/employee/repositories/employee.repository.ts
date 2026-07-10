import {
  CreateEmployeeInput,
  EmployeeFilterInput,
  UpdateEmployeeInput,
} from '../contracts';
import { Prisma, PrismaClient } from '../../../prisma/generated/client';
import { EmployeeEntity } from '../entites/employee.entity';
export interface IEmployeeRepository {
  create(
    db: PrismaClient | Prisma.TransactionClient,
    input: CreateEmployeeInput,
  ): Promise<EmployeeEntity>;

  update(
    db: PrismaClient | Prisma.TransactionClient,
    id: bigint,
    input: UpdateEmployeeInput,
  ): Promise<EmployeeEntity>;

  softDelete(
    db: PrismaClient | Prisma.TransactionClient,
    id: bigint,
  ): Promise<void>;

  findById(
    db: PrismaClient | Prisma.TransactionClient,
    id: bigint,
  ): Promise<EmployeeEntity | null>;

  findByEmployeeNo(
    db: PrismaClient | Prisma.TransactionClient,
    employeeNo: string,
  ): Promise<EmployeeEntity | null>;

  existsByEmployeeNo(
    db: PrismaClient | Prisma.TransactionClient,
    employeeNo: string,
  ): Promise<boolean>;

  findAll(
    db: PrismaClient | Prisma.TransactionClient,
    filter: EmployeeFilterInput,
  ): Promise<EmployeeEntity[]>;
}