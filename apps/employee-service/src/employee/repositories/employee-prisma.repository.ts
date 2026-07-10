import { Injectable } from "@nestjs/common";
import { BaseRepository } from "../../database/base.repository";
import { CreateEmployeeInput,EmployeeFilterInput, UpdateEmployeeInput } from "../contracts";
import { EmployeeEntity } from "../entites/employee.entity";
import { EmployeeMapper } from "../mappers/employee.mapper";
import { IEmployeeRepository } from "./employee.repository";
import { PrismaService } from "../../database/prisma.service";

@Injectable()
export class EmployeePrismaRepository
  extends BaseRepository
  implements IEmployeeRepository
{
  constructor(
    prisma: PrismaService,
  ) {
    super(prisma);
  }

  async create(
    input: CreateEmployeeInput,
  ): Promise<EmployeeEntity> {
    const employee =
      await this.prisma.employee.create({
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
    id: bigint,
    input: UpdateEmployeeInput,
  ): Promise<EmployeeEntity> {
    const employee =
      await this.prisma.employee.update({
        where: { id },
        data: input,
      });

    return EmployeeMapper.toEntity(employee);
  }

  async delete(
    id: bigint,
  ): Promise<void> {
    await this.prisma.employee.update({
      where: { id },
      data: {
        isDeleted: true,
        deletedAt: new Date(),
      },
    });
  }

  async findById(
    id: bigint,
  ): Promise<EmployeeEntity | null> {
    const employee =
      await this.prisma.employee.findFirst({
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
    employeeNo: string,
  ): Promise<EmployeeEntity | null> {
    const employee =
      await this.prisma.employee.findFirst({
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
    employeeNo: string,
  ): Promise<boolean> {
    const count =
      await this.prisma.employee.count({
        where: {
          employeeNo,
          isDeleted: false,
        },
      });

    return count > 0;
  }

  async findAll(
    filter: EmployeeFilterInput,
  ): Promise<EmployeeEntity[]> {
    const employees =
      await this.prisma.employee.findMany({
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

        skip:
          (filter.page - 1) * filter.limit,

        take: filter.limit,

        orderBy: {
          createdAt: 'desc',
        },
      });

    return employees.map(
      EmployeeMapper.toEntity,
    );
  }
}