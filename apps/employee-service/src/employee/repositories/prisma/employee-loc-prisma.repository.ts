import { Inject, Injectable } from '@nestjs/common';

import {
  Prisma,
  PrismaClient,
} from '../../../../prisma/generated/client';

import {
  CreateEmployeeLocationContract,
} from '../../contracts';

import {
  EmployeeLocationEntity,
} from '../../entites/employee-location.entity';

import {
  EMPLOYEE_LOCATION_MAPPER,
} from '../../constants/employee.constant';

import {
  EmployeeLocationMapper,
} from '../../mappers';

import {
  IEmployeeLocationRepository,
} from '../interface';

@Injectable()
export class EmployeeLocationPrismaRepository
  implements IEmployeeLocationRepository
{
  constructor(
    // @Inject(EMPLOYEE_LOCATION_MAPPER)
    private readonly mapper: EmployeeLocationMapper,
  ) {}



  async findByEmployeeId(
    db: PrismaClient | Prisma.TransactionClient,
    employeeId: bigint,
  ): Promise<EmployeeLocationEntity[]> {
    const rows =
      await db.employeeLocation.findMany({
        where: {
          employeeId,
        },
      });

    return this.mapper.toEntities(rows);
  }

  async create(
    db: PrismaClient | Prisma.TransactionClient,
    contract: CreateEmployeeLocationContract,
  ): Promise<EmployeeLocationEntity> {
    const row =
      await db.employeeLocation.create({
        data: this.mapper.toCreateInput(contract),
      });

    return this.mapper.toEntity(row);
  }

  async deleteByEmployeeId(
    db: PrismaClient | Prisma.TransactionClient,
    employeeId: bigint,
  ): Promise<void> {
    await db.employeeLocation.deleteMany({
      where: {
        employeeId,
      },
    });
  }
}