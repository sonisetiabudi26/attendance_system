import { Injectable } from '@nestjs/common';

import { MasterStatus, Prisma, Role, User } from '../../../prisma/generated/client';

import { UserEntity } from '../entities';
import {
  CreateUserContract,
  UpdateUserContract,
} from '../contracts';
import { MasterStatusMapper } from './master-status.mapper';
import { RoleMapper } from './role.mapper';

@Injectable()
export class UserMapper {
  constructor(
    private readonly roleMapper: RoleMapper,
    private readonly masterStatusMapper: MasterStatusMapper,
  ) { }
  toEntity(user: User & {
    role: Role;
    status: MasterStatus;
  }): UserEntity {
    return new UserEntity(
      user.id,
      user.username,
      user.email,
      user.passwordHash,
      this.roleMapper.toEntity(user.role),
      this.masterStatusMapper.toEntity(user.status),
      user.roleId,
      user.statusId,
      user.lastLoginAt,
      user.createdAt,
      user.updatedAt,
    );
  }

  // toEntities(users: User[]): UserEntity[] {
  //   return users.map((user) => this.toEntity(user));
  // }
  toEntities(
    users: Prisma.UserGetPayload<{
      include: {
        role: true;
        status: true;
      };
    }>[],
  ): UserEntity[] {
    return users.map((user) => this.toEntity(user));
  }

  toCreateInput(
    data: CreateUserContract,
  ): Prisma.UserCreateInput {
    return {
      username: data.username,
      email: data.email,
      passwordHash: data.passwordHash,

      role: {
        connect: {
          id: data.roleId,
        },
      },

      status: {
        connect: {
          id: data.statusId,
        },
      },
    };
  }

  toUpdateInput(
    data: UpdateUserContract,
  ): Prisma.UserUpdateInput {
    const update: Prisma.UserUpdateInput = {};

    if (data.username !== undefined) {
      update.username = data.username;
    }

    if (data.email !== undefined) {
      update.email = data.email;
    }

    if (data.passwordHash !== undefined) {
      update.passwordHash = data.passwordHash;
    }

    if (data.roleId !== undefined) {
      update.role = {
        connect: {
          id: data.roleId,
        },
      };
    }

    if (data.statusId !== undefined) {
      update.status = {
        connect: {
          id: data.statusId,
        },
      };
    }

    if (data.lastLoginAt !== undefined) {
      update.lastLoginAt = data.lastLoginAt;
    }

    return update;
  }
}