import { Injectable } from '@nestjs/common';

import {
  Employee,
  Prisma,
} from '../../../prisma/generated/client';

import {
  CreateEmployeeContract,
  UpdateEmployeeContract,
} from '../contracts';

import {
  EmployeeEntity,
} from '../entites/employee.entity';

import {
  PositionMapper,
} from './position.mapper';

@Injectable()
export class EmployeeMapper {
  constructor(
    private readonly positionMapper: PositionMapper,
  ) {}

  toEntity(
    model: Employee & {
      position?: any;
    },
  ): EmployeeEntity {
    return new EmployeeEntity(
      model.id,
      model.userId,
      model.employeeNo,
      model.fullName,
      model.phone,
      model.photoUrl,
      model.positionId,
      model.isDeleted,
      model.createdAt,
      model.updatedAt,
      model.deletedAt,
      model.position
        ? this.positionMapper.toEntity(model.position)
        : undefined,
    );
  }

  toEntities(
    models: Employee[],
  ): EmployeeEntity[] {
    return models.map((model) =>
      this.toEntity(model),
    );
  }

  toCreateInput(
    contract: CreateEmployeeContract,
  ): Prisma.EmployeeCreateInput {
    return {
      employeeNo: contract.employeeNo,
      fullName: contract.fullName,
      phone: contract.phone,
      photoUrl: contract.photoUrl,

      position: {
        connect: {
          id: contract.positionId,
        },
      },
    };
  }

  toUpdateInput(
    contract: UpdateEmployeeContract,
  ): Prisma.EmployeeUpdateInput {
    const update: Prisma.EmployeeUpdateInput = {};

    if (contract.fullName !== undefined) {
      update.fullName = contract.fullName;
    }

    if (contract.phone !== undefined) {
      update.phone = contract.phone;
    }

    if (contract.photoUrl !== undefined) {
      update.photoUrl = contract.photoUrl;
    }

    if (contract.positionId !== undefined) {
      update.position = {
        connect: {
          id: contract.positionId,
        },
      };
    }

    return update;
  }
}