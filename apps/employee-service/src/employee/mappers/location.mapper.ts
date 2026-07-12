import { Injectable } from '@nestjs/common';
import { Location, Prisma } from '../../../prisma/generated/client';

import { LocationEntity } from '../entites/location.entity';

@Injectable()
export class LocationMapper {

  toDomain(location: Location): LocationEntity {

    return new LocationEntity(
      BigInt(location.id),
      location.locationName,
      location.address,
      location.latitude,
      location.longitude,
      location.radius,
      location.createdBy ? BigInt(location.createdBy) : null,
      location.updatedBy ? BigInt(location.updatedBy) : null,
      location.createdAt,
      location.updatedAt,
    );

  }

  toPersistence(entity: LocationEntity): Partial<Location> {

    return {
      locationName: entity.locationName,
      address: entity.address,
      latitude: entity.latitude,
      longitude: entity.longitude,
      radius: entity.radius,
      createdBy: entity.createdBy,
      updatedBy: entity.updatedBy,

    };

  }

    toCreatePersistence(entity: LocationEntity): Prisma.LocationUncheckedCreateInput {
      return {
       locationName: entity.locationName,
      address: entity.address,
      latitude: entity.latitude,
      longitude: entity.longitude,
      radius: entity.radius,
      createdBy: entity.createdBy,
      updatedBy: entity.updatedBy,
      };
  
    }
  
    toUpdatePersistence(entity: LocationEntity): Prisma.LocationUncheckedUpdateInput {
    return {
     locationName: entity.locationName,
      address: entity.address,
      latitude: entity.latitude,
      longitude: entity.longitude,
      radius: entity.radius,
      createdBy: entity.createdBy,
      updatedBy: entity.updatedBy,
    };
  }

}