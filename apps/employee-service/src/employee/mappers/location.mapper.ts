import { Injectable } from '@nestjs/common';

import { Location } from '../../../prisma/generated/client';

import { LocationEntity } from '../entites/location.entity';

@Injectable()
export class LocationMapper {
  toEntity(
    model: Location,
  ): LocationEntity {
    return new LocationEntity(
      model.id,
      model.locationName,
      model.address,
      model.latitude,
      model.longitude,
      model.radius,
      model.createdBy,
      model.updatedBy,
      model.createdAt,
      model.updatedAt,
    );
  }

  toEntities(
    models: Location[],
  ): LocationEntity[] {
    return models.map((model) =>
      this.toEntity(model),
    );
  }
}