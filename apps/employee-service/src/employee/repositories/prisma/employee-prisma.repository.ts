import { Inject, Injectable } from "@nestjs/common";

import { Prisma, PrismaClient } from "../../../../prisma/generated/client";

import {
  CreateEmployeeContract,
  CreateEmployeeRepoContract,
  UpdateEmployeeContract,
} from "../../contracts";

import { EmployeeEntity } from "../../entites/employee.entity";

import { EMPLOYEE_MAPPER } from "../../constants/employee.constant";

import { EmployeeMapper } from "../../mappers";

import { IEmployeeRepository } from "../interface";
import { GetEmployeesContract } from "../../contracts/get-employees.contract";
import { PrismaService } from "apps/employee-service/src/database";

@Injectable()
export class EmployeePrismaRepository implements IEmployeeRepository {
  constructor(
    @Inject(EMPLOYEE_MAPPER)
    private readonly mapper: EmployeeMapper,

    private readonly prisma: PrismaService
  ) {}

  async create(
    db: PrismaClient | Prisma.TransactionClient,
    employee: EmployeeEntity
  ): Promise<EmployeeEntity> {
    const created = await db.employee.create({
      data: {
        ...this.mapper.toCreatePersistence(employee),
        employeeLocations: {
          create:
            employee.employeeLocations?.map((location) => ({
              locationId: location.locationId,
              isDefault: location.isDefault,
            })) ?? [],
        },
      },
      include: {
        position: true,
        employeeLocations: {
          include: {
            location: true,
          },
        },
      },
    });

    return this.mapper.toDomain(created);
  }

  async findById(
    db: PrismaClient | Prisma.TransactionClient,
    id: number
  ): Promise<EmployeeEntity | null> {
    const employee = await db.employee.findFirst({
      where: {
        id,
        isDeleted: false,
      },
      include: {
        position: true,
        employeeLocations: {
          include: {
            location: true,
          },
        },
      },
    });
    if (!employee) {
      return null;
    }
    return this.mapper.toDomain(employee);
  }

  async existsByEmployeeNo(
    db: PrismaClient | Prisma.TransactionClient,
    employeeNo: string
  ): Promise<boolean> {
    const employee = await db.employee.findFirst({
      where: {
        employeeNo,

        isDeleted: false,
      },

      select: {
        id: true,
      },
    });

    return !!employee;
  }
  // async findById(
  //   db: PrismaClient | Prisma.TransactionClient,
  //   id: bigint
  // ): Promise<EmployeeEntity | null> {
  //   const employee = await db.employee.findUnique({
  //     where: {
  //       id,
  //     },
  //     include: {
  //       position: true,
  //       employeeLocations: {
  //         include: {
  //           location: true,
  //         },
  //       },
  //     },
  //   });

  //   if (!employee) {
  //     return null;
  //   }

  //   return this.mapper.toEntity(employee);
  // }

  // async findByEmployeeNo(
  //   db: PrismaClient | Prisma.TransactionClient,
  //   employeeNo: string
  // ): Promise<EmployeeEntity | null> {
  //   const employee = await db.employee.findUnique({
  //     where: {
  //       employeeNo,
  //     },
  //     include: {
  //       position: true,
  //     },
  //   });

  //   if (!employee) {
  //     return null;
  //   }

  //   return this.mapper.toEntity(employee);
  // }

  async findByEmployeeNo(
    db: PrismaClient | Prisma.TransactionClient,
    employeeNo: string
  ): Promise<EmployeeEntity | null> {
    const employee = await db.employee.findFirst({
      where: {
        employeeNo,
        isDeleted: false,
      },
      include: {
        position: true,
        employeeLocations: {
          include: {
            location: true,
          },
        },
      },
    });
    if (!employee) {
      return null;
    }
    return this.mapper.toDomain(employee);
  }

  // async findByUserId(
  //   db: PrismaClient | Prisma.TransactionClient,
  //   userId: bigint
  // ): Promise<EmployeeEntity | null> {
  //   const employee = await db.employee.findFirst({
  //     where: {
  //       userId,
  //       isDeleted: false,
  //     },
  //     include: {
  //       position: true,
  //       employeeLocations: {
  //         include: {
  //           location: true,
  //         },
  //       },
  //     },
  //   });

  //   if (!employee) {
  //     return null;
  //   }

  //   return this.mapper.toEntity(employee);
  // }

  // async existsByEmployeeNo(
  //   db: PrismaClient | Prisma.TransactionClient,
  //   employeeNo: string
  // ): Promise<boolean> {
  //   const count = await db.employee.count({
  //     where: {
  //       employeeNo,
  //     },
  //   });

  //   return count > 0;
  // }
  // async create(
  //   db: PrismaClient | Prisma.TransactionClient,
  //   contract: CreateEmployeeRepoContract
  // ): Promise<EmployeeEntity> {
  //   const employee = await db.employee.create({
  //     data: this.mapper.toCreateInput(contract),
  //     include: {
  //       position: true,
  //     },
  //   });

  //   return this.mapper.toEntity(employee);
  // }
  // async update(
  //   db: PrismaClient | Prisma.TransactionClient,
  //   employeeId: bigint,
  //   contract: UpdateEmployeeContract
  // ): Promise<EmployeeEntity> {
  //   const employee = await db.employee.update({
  //     where: {
  //       id: employeeId,
  //     },
  //     data: this.mapper.toUpdateInput(contract),
  //     include: {
  //       position: true,
  //       employeeLocations: {
  //         include: {
  //           location: true,
  //         },
  //       },
  //     },
  //   });

  //   return this.mapper.toEntity(employee);
  // }

  async update(
    db: PrismaClient | Prisma.TransactionClient,

    employee: EmployeeEntity
  ): Promise<EmployeeEntity> {
    const updated = await db.employee.update({
      where: {
        id: employee.id,
      },
      data: {
        ...this.mapper.toUpdatePersistence(employee),
        employeeLocations: {
          deleteMany: {},
          create:
            employee.employeeLocations?.map((location) => ({
              locationId: location.locationId,
              isDefault: location.isDefault,
            })) ?? [],
        },
      },
      include: {
        position: true,
        employeeLocations: {
          include: {
            location: true,
          },
        },
      },
    });
    return this.mapper.toDomain(updated);
  }
  async updateUserId(
    db: PrismaClient | Prisma.TransactionClient,
    employeeId: bigint,
    userId: bigint
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
    employeeId: bigint
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

  async findAll(
    db: PrismaClient | Prisma.TransactionClient,
    contract: GetEmployeesContract
  ): Promise<{
    data: EmployeeEntity[];
    total: number;
  }> {
    const page = contract.page ?? 1;
    const limit = contract.limit ?? 10;
    const skip = (page - 1) * limit;
    const where: any = {
      isDeleted: false,
    };
    if (contract.search) {
      where.OR = [
        {
          employeeNo: {
            contains: contract.search,
            mode: "insensitive",
          },
        },
        {
          fullName: {
            contains: contract.search,
            mode: "insensitive",
          },
        },
        {
          phone: {
            contains: contract.search,
            mode: "insensitive",
          },
        },
      ];
    }

    if (contract.positionId) {
      where.positionId = contract.positionId;
    }

    const [employees, total] = await this.prisma.$transaction([
      db.employee.findMany({
        where,
        include: {
          position: true,
          employeeLocations: {
            include: {
              location: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
        skip,
        take: limit,
      }),
      db.employee.count({
        where,
      }),
    ]);
    return {
      data: employees.map((employee) => this.mapper.toDomain(employee)),
      total,
    };
  }

  async softDelete(
    db: PrismaClient | Prisma.TransactionClient,
    employeeId: bigint
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
