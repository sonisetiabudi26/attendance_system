import {
  CreateUserContract,
  UpdateUserContract,
} from '../../contracts';

import { UserEntity } from '../../entities';

export interface IUserRepository {
  findById(id: bigint): Promise<UserEntity | null>;

  findByEmail(email: string): Promise<UserEntity | null>;

  findByUsername(username: string): Promise<UserEntity | null>;

  create(data: CreateUserContract): Promise<UserEntity>;

  update(
    id: bigint,
    data: UpdateUserContract,
  ): Promise<UserEntity>;

  updateLastLogin(id: bigint): Promise<void>;

  updatePassword(
    id: bigint,
    passwordHash: string,
  ): Promise<void>;

  delete(id: bigint): Promise<void>;

  findByUsernameOrEmail(
    usernameOrEmail: string,
): Promise<UserEntity | null>;
}