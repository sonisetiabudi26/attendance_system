import { Inject, Injectable } from "@nestjs/common";

import { PrismaService } from "../../database/prisma.service";

import {
  EMPLOYEE_LOCATION_REPOSITORY,
  EMPLOYEE_REPOSITORY,
  LOCATION_REPOSITORY,
  POSITION_REPOSITORY,
} from "../constants/employee.constant";

import {
  CreateEmployeeContract,
  CreateEmployeeRepoContract,
} from "../contracts";

import { EmployeeEntity } from "../entites/employee.entity";

import {
  EmployeeAlreadyExistsException,
  LocationNotFoundException,
  PositionNotFoundException,
} from "../exceptions";

import type {
  IEmployeeLocationRepository,
  IEmployeeRepository,
  ILocationRepository,
  IPositionRepository,
} from "../repositories/interface";
import { AuthGrpcClient } from "../grpc/auth.grpc.client";
import { EmployeeLocationEntity } from "../entites/employee-location.entity";

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
    private readonly authGrpcClient: AuthGrpcClient
  ) {}

  async execute(contract: CreateEmployeeContract): Promise<EmployeeEntity> {
    // ==========================================================
    // VALIDATE EMPLOYEE NUMBER
    // ==========================================================

    const exists = await this.employeeRepository.existsByEmployeeNo(
      this.prisma,
      contract.employeeNo
    );

    if (exists) {
      throw new EmployeeAlreadyExistsException();
    }

    // ==========================================================
    // VALIDATE POSITION
    // ==========================================================

    const position = await this.positionRepository.findById(
      this.prisma,
      contract.positionId
    );

    if (!position) {
      throw new PositionNotFoundException();
    }

    // ==========================================================
    // VALIDATE LOCATIONS
    // ==========================================================

    const locations = await this.locationRepository.findByIds(
      this.prisma,
      contract.locationIds
    );

    if (locations.length !== contract.locationIds.length) {
      throw new LocationNotFoundException();
    }

    // ==========================================================
    // CREATE USER (AUTH SERVICE)
    // ==========================================================

    const authUser = await this.authGrpcClient.createUser({
      employeeNo: contract.employeeNo,
      email: contract.email,
      password: contract.password,
      role: "EMPLOYEE",
    });

    // ==========================================================
    // CREATE EMPLOYEE
    // ==========================================================

    return this.prisma.$transaction(async (tx) => {
      const employee = new EmployeeEntity(
        0n,
        BigInt(authUser.userId),
        contract.employeeNo,
        contract.fullName,
        contract.phone ?? null,
        contract.photoUrl ?? null,
        contract.positionId,
        false,
        new Date(),
        new Date(),
        null,
        position,

        contract.locationIds.map((locationId, index) => {
          const location = locations.find((x) => x.id === locationId);

          return new EmployeeLocationEntity(
            0n,
            0n,
            locationId,
            index === 0,
            new Date(),
            location
          );
        })
      );

      return this.employeeRepository.create(
        tx,
        employee
      );
    });
  }
}
