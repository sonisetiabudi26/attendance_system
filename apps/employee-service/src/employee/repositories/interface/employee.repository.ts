import { PrismaClient, Prisma } from "../../../../prisma/generated/client";

import { EmployeeEntity } from "../../entites/employee.entity";

import { GetEmployeesContract } from "../../contracts";

export interface IEmployeeRepository {
  create(
     db: PrismaClient | Prisma.TransactionClient,
    employee: EmployeeEntity
  ): Promise<EmployeeEntity>;

  update(
     db: PrismaClient | Prisma.TransactionClient,
    employee: EmployeeEntity
  ): Promise<EmployeeEntity>;

  findById(
    db: PrismaClient | Prisma.TransactionClient,
    id: bigint
  ): Promise<EmployeeEntity | null>;

  findByEmployeeNo(
    db: PrismaClient | Prisma.TransactionClient,
    employeeNo: string
  ): Promise<EmployeeEntity | null>;

  findAll(
    db: PrismaClient | Prisma.TransactionClient,
    contract: GetEmployeesContract
  ): Promise<{
    data: EmployeeEntity[];
    total: number;
  }>;

   existsByEmployeeNo(
    db: PrismaClient | Prisma.TransactionClient,
    employeeNo: string,
  ): Promise<boolean>;


  softDelete( db: PrismaClient | Prisma.TransactionClient, id: bigint): Promise<void>;

  // restore( db: PrismaClient | Prisma.TransactionClient, id: bigint): Promise<void>;
}
