import { Injectable } from '@nestjs/common';

import {
  EmployeeLocation,
  Prisma,
} from '../../../prisma/generated/client';

import {
  CreateEmployeeLocationContract,
  UpdateEmployeeLocationContract,
} from '../contracts';

import { EmployeeLocationEntity } from '../entites/employee-location.entity';

@Injectable()
export class EmployeeLocationMapper {
  toEntity(
    model: EmployeeLocation,
  ): EmployeeLocationEntity {
    return new EmployeeLocationEntity(
      model.id,
      model.employeeId,
      model.locationId,
      model.isDefault,
      model.createdAt,
      model.updatedAt,
    );
  }

  toEntities(
    models: EmployeeLocation[],
  ): EmployeeLocationEntity[] {
    return models.map((model) =>
      this.toEntity(model),
    );
  }

  toCreateInput(
    contract: CreateEmployeeLocationContract,
  ): Prisma.EmployeeLocationCreateInput {
    return {
      isDefault: contract.isDefault ?? false,

      employee: {
        connect: {
          id: contract.employeeId,
        },
      },

      location: {
        connect: {
          id: contract.locationId,
        },
      },
    };
  }

  toUpdateInput(
    contract: UpdateEmployeeLocationContract,
  ): Prisma.EmployeeLocationUpdateInput {
    return {
      isDefault: contract.isDefault,
    };
  }
}