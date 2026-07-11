import { Inject, Injectable } from '@nestjs/common';

import {
  Prisma,
  PrismaClient,
} from '../../../../prisma/generated/client';

import {
  CreateEmployeeContract,
  UpdateEmployeeContract,
} from '../../contracts';

import { EmployeeEntity } from '../../entites/employee.entity';

import { EMPLOYEE_MAPPER } from '../../constants/employee.constant';

import { EmployeeMapper } from '../../mappers';

import { IEmployeeRepository } from '../interface';

@Injectable()
export class EmployeePrismaRepository
  implements IEmployeeRepository
{
  constructor(
   
    private readonly mapper: EmployeeMapper,
  ) {}

  async findById(
  db: PrismaClient | Prisma.TransactionClient,
  id: bigint,
): Promise<EmployeeEntity | null> {
  const employee = await db.employee.findUnique({
    where: {
      id,
    },
    include: {
      position: true,
    },
  });

  if (!employee) {
    return null;
  }

  return this.mapper.toEntity(employee);
}

async findByEmployeeNo(
  db: PrismaClient | Prisma.TransactionClient,
  employeeNo: string,
): Promise<EmployeeEntity | null> {
  const employee = await db.employee.findUnique({
    where: {
      employeeNo,
    },
    include: {
      position: true,
    },
  });

  if (!employee) {
    return null;
  }

  return this.mapper.toEntity(employee);
}

async findByUserId(
  db: PrismaClient | Prisma.TransactionClient,
  userId: bigint,
): Promise<EmployeeEntity | null> {
  const employee = await db.employee.findFirst({
    where: {
      userId,
      isDeleted: false,
    },
    include: {
      position: true,
    },
  });

  if (!employee) {
    return null;
  }

  return this.mapper.toEntity(employee);
}

async existsByEmployeeNo(
  db: PrismaClient | Prisma.TransactionClient,
  employeeNo: string,
): Promise<boolean> {
  const count = await db.employee.count({
    where: {
      employeeNo,
    },
  });

  return count > 0;
}
async create(
  db: PrismaClient | Prisma.TransactionClient,
  contract: CreateEmployeeContract,
): Promise<EmployeeEntity> {
  const employee = await db.employee.create({
    data: this.mapper.toCreateInput(contract),
    include: {
      position: true,
    },
  });

  return this.mapper.toEntity(employee);
}
async update(
  db: PrismaClient | Prisma.TransactionClient,
  employeeId: bigint,
  contract: UpdateEmployeeContract,
): Promise<EmployeeEntity> {
  const employee = await db.employee.update({
    where: {
      id: employeeId,
    },
    data: this.mapper.toUpdateInput(contract),
    include: {
      position: true,
    },
  });

  return this.mapper.toEntity(employee);
}

async updateUserId(
  db: PrismaClient | Prisma.TransactionClient,
  employeeId: bigint,
  userId: bigint,
): Promise<void> {
  await db.employee.update({
    where: {
      id: employeeId,
    },
    data: {
      userId,
    },
  });
}

async delete(
  db: PrismaClient | Prisma.TransactionClient,
  employeeId: bigint,
): Promise<void> {
  await db.employee.update({
    where: {
      id: employeeId,
    },
    data: {
      isDeleted: true,
      deletedAt: new Date(),
    },
  });
}
}