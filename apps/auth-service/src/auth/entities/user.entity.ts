import { MasterStatusEntity } from "./master-status.entity";
import { RoleEntity } from "./role.entity";

export class UserEntity {
  constructor(
    public readonly id: bigint,
    public readonly username: string,
    public readonly email: string,
    public readonly passwordHash: string,
    public readonly role: RoleEntity,
    public readonly status: MasterStatusEntity,
    public readonly roleId: bigint,
    public readonly statusId: bigint,
    public readonly lastLoginAt: Date | null,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}
}