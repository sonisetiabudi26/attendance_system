export class MasterStatusEntity {
  constructor(
    public readonly id: bigint,
    public readonly code: string,
    public readonly name: string,
    public readonly isDefault: boolean,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}
}