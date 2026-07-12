import { Inject, Injectable } from "@nestjs/common";

import { Employee, Prisma } from "../../../prisma/generated/client";

import { EMPLOYEE_LOCATION_MAPPER, MASTER_POSITION_MAPPER } from "../constants/employee.constant";

import { EmployeeEntity } from "../entites/employee.entity";

import { EmployeeLocationMapper } from "./location-employee.mapper";
import { MasterPositionMapper } from "./position.mapper";

@Injectable()
export class EmployeeMapper {
  constructor(
    @Inject(MASTER_POSITION_MAPPER)
    private readonly positionMapper: MasterPositionMapper,

    @Inject(EMPLOYEE_LOCATION_MAPPER)
    private readonly employeeLocationMapper: EmployeeLocationMapper
  ) {}

  toDomain(employee: any): EmployeeEntity {
    return new EmployeeEntity(
      BigInt(employee.id),
      employee.userId ? BigInt(employee.userId) : null,
      employee.employeeNo,
      employee.fullName,
      employee.phone,
      employee.photoUrl,
      BigInt(employee.positionId),
      employee.isDeleted,
      employee.createdAt,
      employee.updatedAt,
      employee.deletedAt,
      employee.position
        ? this.positionMapper.toDomain(employee.position)
        : undefined,

      employee.employeeLocations
        ? employee.employeeLocations.map((location) =>
            this.employeeLocationMapper.toDomain(location)
          )
        : []
    );
  }

  toPersistence(entity: EmployeeEntity): Partial<Employee> {
    return {
      userId: entity.userId,
      employeeNo: entity.employeeNo,
      fullName: entity.fullName,
      phone: entity.phone,
      photoUrl: entity.photoUrl,
      positionId: entity.positionId,
      isDeleted: entity.isDeleted,
    };
  }

  toCreatePersistence(entity: EmployeeEntity): Prisma.EmployeeUncheckedCreateInput {
      return {
       userId: entity.userId,
      employeeNo: entity.employeeNo,
      fullName: entity.fullName,
      phone: entity.phone,
      photoUrl: entity.photoUrl,
      positionId: entity.positionId,
      isDeleted: entity.isDeleted,
      };
  
    }
  
    toUpdatePersistence(entity: EmployeeEntity): Prisma.EmployeeUncheckedUpdateInput {
    return {
     userId: entity.userId,
      employeeNo: entity.employeeNo,
      fullName: entity.fullName,
      phone: entity.phone,
      photoUrl: entity.photoUrl,
      positionId: entity.positionId,
      isDeleted: entity.isDeleted,
    };
  }
}
