import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

import { IUserRepository } from '../interface/user-repo.interface';

import {
    CreateUserContract,
    UpdateUserContract,
} from '../../contracts';

import { UserEntity } from '../../entities';

import { UserMapper } from '../../mappers';
const USER_INCLUDE = {
    role: true,
    status: true,
} as const;
@Injectable()
export class UserPrismaRepository
    implements IUserRepository {

    constructor(
        private readonly mapper: UserMapper,
    ) { }

    async findById(
        db: PrismaClient | Prisma.TransactionClient,
        id: bigint,
    ): Promise<UserEntity | null> {
        const user = await db.user.findUnique({
            where: { id },
            include: USER_INCLUDE,
        });

        return this.mapper.toEntity(user);
    }

    async findByUsername(
        db: PrismaClient | Prisma.TransactionClient,
        username: string,
    ): Promise<UserEntity | null> {
        const user = await db.user.findUnique({
            where: { username },
            include: USER_INCLUDE,
        });

        return this.mapper.toEntity(user);
    }


    async findByEmail(
        db: PrismaClient | Prisma.TransactionClient,
        email: string,
    ): Promise<UserEntity | null> {
        const user = await db.user.findUnique({
            where: { email },
           include: USER_INCLUDE,
        });
         if (!user) {
            return null;
        }

        return this.mapper.toEntity(user);
    }

    async existsByUsername(
        db: PrismaClient | Prisma.TransactionClient,
        username: string,
    ): Promise<boolean> {
        const count = await db.user.count({
            where: {
                username,
            },
        });

        return count > 0;
    }

    async existsByEmail(
        db: PrismaClient | Prisma.TransactionClient,
        email: string,
    ): Promise<boolean> {
        const count = await db.user.count({
            where: {
                email,
            },
        });

        return count > 0;
    }

    async create(
        db,
        contract,
    ) {
        const model =
            await db.user.create({
                data: this.mapper.toCreateInput(contract),
            });
        return this.mapper.toEntity(model);
    }

    async update(
        db: PrismaClient | Prisma.TransactionClient,
        userId: bigint,
        input: UpdateUserContract,
    ): Promise<UserEntity> {
        const model =
            await db.user.update({
                where: {
                    id: userId,
                },include: USER_INCLUDE,
                
                data: this.mapper.toUpdateInput(input),
            });
        return this.mapper.toEntity(model);

    }
}