import { Inject, Injectable } from "@nestjs/common";

import { Prisma, PrismaClient } from "../../../../prisma/generated/client";

import { EMPLOYEE_LOCATION_MAPPER } from "../../constants/employee.constant";

import { IEmployeeLocationRepository } from "../interface";

import { EmployeeLocationMapper } from "../../mappers";

import { EmployeeLocationEntity } from "../../entites/employee-location.entity";

@Injectable()
export class EmployeeLocationPrismaRepository
  implements IEmployeeLocationRepository
{
  constructor(
    @Inject(EMPLOYEE_LOCATION_MAPPER)
    private readonly mapper: EmployeeLocationMapper
  ) {}

  async createMany(
    db: PrismaClient | Prisma.TransactionClient,

    employeeId: bigint,

    locationIds: bigint[]
  ): Promise<void> {
    if (!locationIds.length) return;

    await db.employeeLocation.createMany({
      data: locationIds.map((locationId) => ({
        employeeId,

        locationId,

        isDefault: false,
      })),
    });
  }

  async replace(
    db: PrismaClient | Prisma.TransactionClient,
    employeeId: bigint,
    entities: EmployeeLocationEntity[]
  ): Promise<void> {
    await db.employeeLocation.deleteMany({
      where: {
        employeeId,
      },
    });

    if (!entities.length) {
      return;
    }

    await db.employeeLocation.createMany({
      data: entities.map((entity) => ({
        employeeId,

        locationId: entity.locationId,

        isDefault: entity.isDefault,
      })),
    });
  }

  async findByEmployeeId(
    db: PrismaClient | Prisma.TransactionClient,
    employeeId: bigint
  ): Promise<EmployeeLocationEntity[]> {
    const rows = await db.employeeLocation.findMany({
      where: {
        employeeId,
      },

      include: {
        location: true,
      },
    });

    return rows.map((row) => this.mapper.toDomain(row));
  }

  async deleteByEmployeeId(
    db: PrismaClient | Prisma.TransactionClient,
    employeeId: bigint
  ): Promise<void> {
    await db.employeeLocation.deleteMany({
      where: {
        employeeId,
      },
    });
  }

  async deleteByEmployeeAndLocationIds(
    db: PrismaClient | Prisma.TransactionClient,
    employeeId: bigint,
    locationIds: bigint[]
  ): Promise<void> {
    await db.employeeLocation.deleteMany({
      where: {
        employeeId,
        locationId: {
          in: locationIds,
        },
      },
    });
  }
}
