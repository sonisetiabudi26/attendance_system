import { Inject, Injectable } from '@nestjs/common';

import { PrismaService } from '../../database/prisma.service';

import {
  EMPLOYEE_LOCATION_REPOSITORY,
  EMPLOYEE_REPOSITORY,
  LOCATION_REPOSITORY,
  POSITION_REPOSITORY,
} from '../constants/employee.constant';

import {
  CreateEmployeeContract,
  CreateEmployeeRepoContract
} from '../contracts';

import { EmployeeEntity } from '../entites/employee.entity';

import {
  EmployeeAlreadyExistsException,
  LocationNotFoundException,
  PositionNotFoundException,
} from '../exceptions';

import type {
  IEmployeeLocationRepository,
  IEmployeeRepository,
  ILocationRepository,
  IPositionRepository,
} from '../repositories/interface';

@Injectable()
export class CreateEmployeeService {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository: IEmployeeRepository,

    @Inject(EMPLOYEE_LOCATION_REPOSITORY)
    private readonly employeeLocationRepository: IEmployeeLocationRepository,

    @Inject(POSITION_REPOSITORY)
    private readonly positionRepository: IPositionRepository,

    @Inject(LOCATION_REPOSITORY)
    private readonly locationRepository: ILocationRepository,

    private readonly prisma: PrismaService,
  ) {}

  async execute(
    contract: CreateEmployeeContract,
  ): Promise<EmployeeEntity> {

    // ==========================================================
    // VALIDATE EMPLOYEE NUMBER
    // ==========================================================

    const exists =
      await this.employeeRepository.existsByEmployeeNo(
        this.prisma,
        contract.employeeNo,
      );

    if (exists) {
      throw new EmployeeAlreadyExistsException();
    }

    // ==========================================================
    // VALIDATE POSITION
    // ==========================================================

    const position =
      await this.positionRepository.findById(
        this.prisma,
        contract.positionId,
      );

    if (!position) {
      throw new PositionNotFoundException();
    }

    // ==========================================================
    // VALIDATE LOCATION
    // ==========================================================

    for (const locationId of contract.locationIds) {
      const location =
        await this.locationRepository.findById(
          this.prisma,
          locationId,
        );

      if (!location) {
        throw new LocationNotFoundException();
      }
    }

    // ==========================================================
    // CREATE EMPLOYEE
    // ==========================================================

    const employee =
      await this.prisma.$transaction(
        async (tx) => {
          const employee =
            await this.employeeRepository.create(
              tx,
              contract,
            );

          // ==========================================
          // CREATE EMPLOYEE LOCATION
          // ==========================================

          let isDefault = true;

          for (const locationId of contract.locationIds) {
            await this.employeeLocationRepository.create(
              tx,
              {
                employeeId: employee.id,
                locationId,
                isDefault,
              },
            );

            isDefault = false;
          }

          return employee;
        },
      );

    return employee;
  }
}