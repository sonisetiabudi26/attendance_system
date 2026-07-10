import { Location } from '../../../prisma/generated/client';
import { LocationEntity } from '../entites/location.entity';

export class LocationMapper {
  static toEntity(
    location: Location,
  ): LocationEntity {
    return {
      id: location.id,
      locationName: location.locationName,
      address: location.address ?? undefined,
      latitude: location.latitude
        ? Number(location.latitude)
        : undefined,
      longitude: location.longitude
        ? Number(location.longitude)
        : undefined,
      radius: location.radius,
      createdBy: location.createdBy ?? undefined,
      updatedBy: location.updatedBy ?? undefined,
      createdAt: location.createdAt,
      updatedAt: location.updatedAt,
    };
  }
}