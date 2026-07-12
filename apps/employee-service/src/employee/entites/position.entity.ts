export class PositionEntity {

  constructor(
    public readonly id: bigint,
    public code: string,
    public name: string,
    public createdBy: bigint | null,
    public updatedBy: bigint | null,
    public readonly createdAt: Date,
    public updatedAt: Date,

  ) {}

}