import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '../../../prisma/generated/client';

import { PrismaService } from '../../database';

import { BaseRepository } from '../../database';

import { IEmployeeRepository } from './employee.repository';

import {
    CreateEmployeeInput,
    EmployeeFilterInput,
    UpdateEmployeeInput,
} from '../contracts';

import { EmployeeEntity } from '../entites/employee.entity';

import { EmployeeMapper } from '../mappers/employee.mapper';

@Injectable()
export class EmployeePrismaRepository
    extends BaseRepository
    implements IEmployeeRepository {
    constructor(
        prisma: PrismaService,
    ) {
        super(prisma);
    }

    async create(
        db: PrismaClient | Prisma.TransactionClient,
        input: CreateEmployeeInput,
    ): Promise<EmployeeEntity> {
        const employee =
            await db.employee.create({
                data: {
                    employeeNo: input.employeeNo,
                    fullName: input.fullName,
                    phone: input.phone,
                    photoUrl: input.photoUrl,
                    positionId: input.positionId,
                },
            });

        return EmployeeMapper.toEntity(employee);
    }

    async update(
        db: PrismaClient | Prisma.TransactionClient,
        id: bigint,
        input: UpdateEmployeeInput,
    ): Promise<EmployeeEntity> {
        const employee =
            await db.employee.update({
                where: {
                    id,
                },
                data: input,
            });

        return EmployeeMapper.toEntity(employee);
    }

    async softDelete(
        db: PrismaClient | Prisma.TransactionClient,
        id: bigint,
    ): Promise<void> {
        await db.employee.update({
            where: {
                id,
            },
            data: {
                isDeleted: true,
                deletedAt: new Date(),
            },
        });
    }

    async findById(
        db: PrismaClient | Prisma.TransactionClient,
        id: bigint,
    ): Promise<EmployeeEntity | null> {
        const employee =
            await db.employee.findFirst({
                where: {
                    id,
                    isDeleted: false,
                },
            });

        return employee
            ? EmployeeMapper.toEntity(employee)
            : null;
    }

    async findByEmployeeNo(
        db: PrismaClient | Prisma.TransactionClient,
        employeeNo: string,
    ): Promise<EmployeeEntity | null> {
        const employee =
            await db.employee.findFirst({
                where: {
                    employeeNo,
                    isDeleted: false,
                },
            });

        return employee
            ? EmployeeMapper.toEntity(employee)
            : null;
    }

    async existsByEmployeeNo(
        db: PrismaClient | Prisma.TransactionClient,
        employeeNo: string,
    ): Promise<boolean> {
        const count =
            await db.employee.count({
                where: {
                    employeeNo,
                    isDeleted: false,
                },
            });

        return count > 0;
    }

    async findAll(
        db: PrismaClient | Prisma.TransactionClient,
        filter: EmployeeFilterInput,
    ): Promise<EmployeeEntity[]> {
        const employees =
            await db.employee.findMany({
                where: {
                    isDeleted: false,

                    ...(filter.keyword && {
                        OR: [
                            {
                                employeeNo: {
                                    contains: filter.keyword,
                                    mode: 'insensitive',
                                },
                            },
                            {
                                fullName: {
                                    contains: filter.keyword,
                                    mode: 'insensitive',
                                },
                            },
                        ],
                    }),
                },

                skip: (filter.page - 1) * filter.limit,

                take: filter.limit,

                orderBy: {
                    createdAt: 'desc',
                },
            });

        return employees.map(EmployeeMapper.toEntity);
    }
    async updateUserId(
        db: PrismaClient | Prisma.TransactionClient,
        employeeId: bigint,
        userId: bigint,
    ): Promise<void> {

        await db.employee.update({

            where: {
                id: employeeId,
            },

            data: {
                userId,
            },

        });

    }
}