import { Inject, Injectable } from '@nestjs/common';

import { PrismaService } from '../../database';

import {
  EMPLOYEE_REPOSITORY,
  POSITION_REPOSITORY,
} from '../constants/employee.constant';

import type {
  IEmployeeRepository,
} from '../repositories/employee.repository';

import type {
  IPositionRepository,
} from '../repositories/position.repository';

import {
  CreateEmployeeInput,
} from '../contracts';

import {
  EmployeeAlreadyExistsException,
  PositionNotFoundException,
} from '../exceptions';

import { EmployeeEntity } from '../entites/employee.entity';

@Injectable()
export class CreateEmployeeService {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository: IEmployeeRepository,

    @Inject(POSITION_REPOSITORY)
    private readonly positionRepository: IPositionRepository,

    private readonly prisma: PrismaService,
  ) {}

  async execute(
    input: CreateEmployeeInput,
  ): Promise<EmployeeEntity> {
    // Validasi employee number
    const exists =
      await this.employeeRepository.existsByEmployeeNo(
        this.prisma,
        input.employeeNo,
      );

    if (exists) {
      throw new EmployeeAlreadyExistsException();
    }

    // Validasi position
    const position =
      await this.positionRepository.findById(
        this.prisma,
        input.positionId,
      );

    if (!position) {
      throw new PositionNotFoundException();
    }

    // Transaction
    return this.prisma.$transaction(
      async (tx) => {
        const employee =
          await this.employeeRepository.create(
            tx,
            input,
          );

        /**
         * TODO
         *
         * Auth gRPC
         *
         * const user =
         * await authClient.createUser(...)
         */

        /**
         * TODO
         *
         * await employeeRepository.updateUserId(
         *    tx,
         *    employee.id,
         *    BigInt(user.userId),
         * )
         */

        /**
         * TODO
         *
         * RabbitMQ Publish
         */

        return employee;
      },
    );
  }
}