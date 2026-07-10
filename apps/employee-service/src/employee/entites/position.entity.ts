export class PositionEntity {
  id: bigint;

  code: string;

  name: string;

  createdBy?: bigint;

  updatedBy?: bigint;

  createdAt: Date;

  updatedAt: Date;
}