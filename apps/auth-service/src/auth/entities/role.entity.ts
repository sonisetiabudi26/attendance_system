export class RoleEntity {
  constructor(
    public readonly id: bigint,
    public readonly code: string,
    public readonly name: string,
    public readonly description: string | null,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}
}