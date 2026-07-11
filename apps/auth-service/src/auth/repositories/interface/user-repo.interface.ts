import { PrismaClient, Prisma } from '@prisma/client';

import {
    CreateUserContract,
    CreateUserRepositoryContract,
    UpdateUserContract,
} from '../../contracts';

import { UserEntity } from '../../entities';

export interface IUserRepository {
  findById(
    db: PrismaClient | Prisma.TransactionClient,
    id: bigint,
  ): Promise<UserEntity | null>;

  findByUsername(
    db: PrismaClient | Prisma.TransactionClient,
    username: string,
  ): Promise<UserEntity | null>;

  findByEmail(
    db: PrismaClient | Prisma.TransactionClient,
    email: string,
  ): Promise<UserEntity | null>;

  existsByUsername(
    db: PrismaClient | Prisma.TransactionClient,
    username: string,
  ): Promise<boolean>;

  existsByEmail(
    db: PrismaClient | Prisma.TransactionClient,
    email: string,
  ): Promise<boolean>;

  create(
    db: PrismaClient | Prisma.TransactionClient,
    input: CreateUserRepositoryContract,
  ): Promise<UserEntity>;

  update(
    db: PrismaClient | Prisma.TransactionClient,
    userId :  bigint,
    input: UpdateUserContract,
  ): Promise<UserEntity>;
}