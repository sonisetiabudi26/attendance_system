import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database';

import { BaseRepository } from '../../database';

import { EmployeeRepository } from './employee.repository';
import { CreateEmployeeInput, UpdateEmployeeInput, EmployeeFilterInput } from '../contracts';
import { EmployeeEntity } from '../entites/employee.entity';

@Injectable()
export class EmployeePrismaRepository
  extends BaseRepository
  implements EmployeeRepository {

  constructor(
    prisma: PrismaService,
  ) {
    super(prisma);
  }
    async create(input: CreateEmployeeInput): Promise<EmployeeEntity> {
        throw new Error('Method not implemented.');
    }
    async update(id: bigint, input: UpdateEmployeeInput): Promise<EmployeeEntity> {
        throw new Error('Method not implemented.');
    }
    async delete(id: bigint): Promise<void> {
        throw new Error('Method not implemented.');
    }
    async findById(id: bigint): Promise<EmployeeEntity | null> {
        throw new Error('Method not implemented.');
    }
    async findByEmployeeNo(employeeNo: string): Promise<EmployeeEntity | null> {
        throw new Error('Method not implemented.');
    }
    async findAll(filter: EmployeeFilterInput): Promise<EmployeeEntity[]> {
        throw new Error('Method not implemented.');
    }

}