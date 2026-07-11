import { Prisma } from "../../../prisma/generated/client";


export class LocationEntity {
  constructor(
    public readonly id: bigint,

    public locationName: string,

    public address: string | null,

    public latitude: Prisma.Decimal | null,

    public longitude: Prisma.Decimal | null,

    public radius: number,

    public createdBy: bigint | null,

    public updatedBy: bigint | null,

    public readonly createdAt: Date,

    public updatedAt: Date,
  ) {}
}