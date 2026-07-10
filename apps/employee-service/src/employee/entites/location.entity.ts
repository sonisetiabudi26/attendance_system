export class LocationEntity {
  id: bigint;

  locationName: string;

  address?: string;

  latitude?: number;

  longitude?: number;

  radius: number;

  createdBy?: bigint;

  updatedBy?: bigint;

  createdAt: Date;

  updatedAt: Date;
}