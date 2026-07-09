import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database';

import { UserEntity } from '../entities';
import { IUserRepository } from '../interfaces';
import { UserMapper } from '../mappers';
import {
    CreateUserContract,
    UpdateUserContract,
} from '../contracts';

@Injectable()
export class UserRepository implements IUserRepository {
    constructor(
        private readonly prisma: PrismaService,
        private readonly mapper: UserMapper,
    ) { }

    async findById(id: bigint): Promise<UserEntity | null> {
        const user = await this.prisma.user.findUnique({
            where: { id },
            include: {
                role: true,
                status: true,
            },
        });

        return user ? this.mapper.toEntity(user) : null;
    }

    async findByEmail(email: string): Promise<UserEntity | null> {
        const user = await this.prisma.user.findUnique({
            where: { email },
            include: {
                role: true,
                status: true,
            },
        });

        return user ? this.mapper.toEntity(user) : null;
    }

    async findByUsername(username: string): Promise<UserEntity | null> {
        const user = await this.prisma.user.findUnique({
            where: { username },
            include: {
                role: true,
                status: true,
            },
        });

        return user ? this.mapper.toEntity(user) : null;
    }

    async create(data: CreateUserContract): Promise<UserEntity> {
        const user = await this.prisma.user.create({
            data: {
                username: data.username,
                email: data.email,
                passwordHash: data.passwordHash,
                roleId: data.roleId,
                statusId: data.statusId,
            },
        });

        return this.mapper.toEntity(user);
    }

    async update(
        id: bigint,
        data: UpdateUserContract,
    ): Promise<UserEntity> {
        const user = await this.prisma.user.update({
            where: { id },
            data: {
                ...data,
            },
        });

        return this.mapper.toEntity(user);
    }

    async updateLastLogin(id: bigint): Promise<void> {
        await this.prisma.user.update({
            where: { id },
            data: {
                lastLoginAt: new Date(),
            },
        });
    }

    async updatePassword(
        id: bigint,
        passwordHash: string,
    ): Promise<void> {
        await this.prisma.user.update({
            where: { id },
            data: {
                passwordHash,
            },
        });
    }

    async delete(id: bigint): Promise<void> {
        await this.prisma.user.delete({
            where: { id },
        });
    }
}