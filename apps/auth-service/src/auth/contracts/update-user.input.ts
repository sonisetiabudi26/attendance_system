export class UpdateUserContract {
  username?: string;

  email?: string;

  passwordHash?: string;

  roleId?: bigint;

  statusId?: bigint;

  lastLoginAt?: Date;
}