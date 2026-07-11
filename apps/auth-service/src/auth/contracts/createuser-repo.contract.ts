export interface CreateUserRepositoryContract {
  username: string;
  email: string;
  passwordHash: string;
  roleId: bigint;
  statusId: bigint;
}