import {
  CreateUserModel,
  UpdateUserModel,
} from '../../contracts';

import { UserEntity } from '../../entities';

export interface IUserRepository {
  findById(id: bigint): Promise<UserEntity | null>;

  findByEmail(email: string): Promise<UserEntity | null>;

  findByUsername(username: string): Promise<UserEntity | null>;

  create(data: CreateUserModel): Promise<UserEntity>;

  update(
    id: bigint,
    data: UpdateUserModel,
  ): Promise<UserEntity>;

  updateLastLogin(id: bigint): Promise<void>;

  updatePassword(
    id: bigint,
    passwordHash: string,
  ): Promise<void>;

  delete(id: bigint): Promise<void>;
}