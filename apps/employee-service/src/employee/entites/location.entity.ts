import { Decimal } from '@prisma/client/runtime/library';

export class LocationEntity {

  constructor(
    public readonly id: bigint,
    public locationName: string,
    public address: string | null,
    public latitude: Decimal | null,
    public longitude: Decimal | null,
    public radius: number,
    public createdBy: bigint | null,
    public updatedBy: bigint | null,
    public readonly createdAt: Date,
    public updatedAt: Date,

  ) {}

}