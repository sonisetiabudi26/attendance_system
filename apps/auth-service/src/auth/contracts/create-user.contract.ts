export class CreateUserContract {
  username: string;

  email: string;

  passwordHash: string;

  roleId: bigint;

  statusId: bigint;
}