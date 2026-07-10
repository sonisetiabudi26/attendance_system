import { Inject, Injectable } from '@nestjs/common';

import { PrismaService } from '../../database';

import {
  EMPLOYEE_REPOSITORY,
  POSITION_REPOSITORY,
} from '../constants/employee.constant';

import type {
  IEmployeeRepository,
  IPositionRepository,
} from '../repositories';

import { AuthGrpcClient } from '../grpc/auth.grpc.client';

// import { EmployeePublisher } from '../publishers/employee.publisher';

import { CreateEmployeeInput } from '../contracts';

import { EmployeeEntity } from '../entites/employee.entity';

import {
  EmployeeAlreadyExistsException,
  PositionNotFoundException,
} from '../exceptions';

@Injectable()
export class CreateEmployeeService {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository: IEmployeeRepository,

    @Inject(POSITION_REPOSITORY)
    private readonly positionRepository: IPositionRepository,

    private readonly authGrpcClient: AuthGrpcClient,

    // private readonly employeePublisher: EmployeePublisher,

    private readonly prisma: PrismaService,
  ) {}

  async execute(
    input: CreateEmployeeInput,
  ): Promise<EmployeeEntity> {
    /**
     * Validate Employee Number
     */
    const exists =
      await this.employeeRepository.existsByEmployeeNo(
        this.prisma,
        input.employeeNo,
      );

    if (exists) {
      throw new EmployeeAlreadyExistsException();
    }

    /**
     * Validate Position
     */
    const position =
      await this.positionRepository.findById(
        this.prisma,
        input.positionId,
      );

    if (!position) {
      throw new PositionNotFoundException();
    }

    /**
     * Transaction
     */
    const employee = await this.prisma.$transaction(
      async (tx) => {
        /**
         * Create Employee
         */
        const createdEmployee =
          await this.employeeRepository.create(
            tx,
            input,
          );

        /**
         * Create Login (Auth Service)
         */
        const authUser =
          await this.authGrpcClient.createUser({
            username: input.username,
            email: input.email,
            password: input.password,
            role: 'EMPLOYEE',
          });

        /**
         * Save User Id
         */
        await this.employeeRepository.updateUserId(
          tx,
          createdEmployee.id,
          BigInt(authUser.userId),
        );

        /**
         * Return latest data
         */
        const employee =
          await this.employeeRepository.findById(
            tx,
            createdEmployee.id,
          );

        if (!employee) {
          throw new Error(
            'Employee not found after creation.',
          );
        }

        return employee;
      },
    );

    /**
     * Publish Event
     *
     * Publish setelah transaction berhasil commit.
     * Jangan publish di dalam transaction.
     */
    // await this.employeePublisher.employeeCreated({
    //   employeeId: employee.id.toString(),
    //   employeeNo: employee.employeeNo,
    //   fullName: employee.fullName,
    //   positionId: employee.positionId.toString(),
    //   userId: employee.userId!.toString(),
    // });

    return employee;
  }
}