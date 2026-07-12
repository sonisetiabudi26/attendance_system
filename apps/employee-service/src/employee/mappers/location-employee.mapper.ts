import { Inject, Injectable } from "@nestjs/common";

import { EmployeeLocation } from "../../../prisma/generated/client";

import { LOCATION_MAPPER } from "../constants/employee.constant";

import { EmployeeLocationEntity } from "../entites/employee-location.entity";

import { LocationMapper } from "./location.mapper";

@Injectable()
export class EmployeeLocationMapper {
  constructor(
    @Inject(LOCATION_MAPPER)
    private readonly locationMapper: LocationMapper
  ) {}

  toDomain(data: any): EmployeeLocationEntity {
    return new EmployeeLocationEntity(
      BigInt(data.id),
      BigInt(data.employeeId),
      BigInt(data.locationId),
      data.isDefault,
      data.createdAt,
      data.location ? this.locationMapper.toDomain(data.location) : undefined
    );
  }

  toPersistence(entity: EmployeeLocationEntity): Partial<EmployeeLocation> {
    return {
      employeeId: entity.employeeId,
      locationId: entity.locationId,
      isDefault: entity.isDefault,
    };
  }
}
