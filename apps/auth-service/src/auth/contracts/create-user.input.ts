export class CreateUserModel {
  username: string;

  email: string;

  passwordHash: string;

  roleId: bigint;

  statusId: bigint;
}