import { Inject, Injectable } from "@nestjs/common";
import {
  EMPLOYEE_LOCATION_REPOSITORY,
  EMPLOYEE_REPOSITORY,
  LOCATION_REPOSITORY,
  POSITION_REPOSITORY,
} from "../constants/employee.constant";
import type {
  IEmployeeLocationRepository,
  IEmployeeRepository,
  ILocationRepository,
  IPositionRepository,
} from "../repositories";
import { PrismaService } from "../../database/prisma.service";
import { UpdateEmployeeContract } from "../contracts";
import { EmployeeEntity } from "../entites/employee.entity";
import {
  LocationNotFoundException,
  PositionNotFoundException,
} from "../exceptions";
import { EmployeeNotFoundException } from "../exceptions/employee-notfound.exception";
import { AuthGrpcClient } from "../grpc/auth.grpc.client";

@Injectable()
export class UpdateEmployeeService {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository: IEmployeeRepository,

    @Inject(POSITION_REPOSITORY)
    private readonly positionRepository: IPositionRepository,

    @Inject(LOCATION_REPOSITORY)
    private readonly locationRepository: ILocationRepository,

    @Inject(EMPLOYEE_LOCATION_REPOSITORY)
    private readonly employeeLocationRepository: IEmployeeLocationRepository,

    private readonly prisma: PrismaService,

    private readonly authGrpcClient: AuthGrpcClient
  ) {}

  async execute(contract: UpdateEmployeeContract): Promise<EmployeeEntity> {
    const employee = await this.employeeRepository.findById(
      this.prisma,
      contract.employeeId
    );

    if (!employee) {
      throw new EmployeeNotFoundException();
    }

    const position = await this.positionRepository.findById(
      this.prisma,
      contract.positionId
    );

    if (!position) {
      throw new PositionNotFoundException();
    }

    const locations = await this.locationRepository.findByIds(
      this.prisma,
      contract.locationIds
    );

    if (locations.length !== contract.locationIds.length) {
      throw new LocationNotFoundException();
    }

    // =====================================
    //
    //
    // Auth Service
    //
    // =====================================
    await this.authGrpcClient.updateCredential({
      userId: employee.userId!.toString(),
      email: contract.email,
      password: contract.password ?? "",
    });

    await this.prisma.$transaction(async (tx) => {
      const employee = await this.employeeRepository.findById(
        tx,
        BigInt(contract.employeeId)
      );

      if (!employee) {
        throw new EmployeeNotFoundException();
      }

      // update entity
      employee.fullName = contract.fullName;
      employee.phone = contract.phone??"";
      employee.photoUrl = contract.photoUrl??"";
      employee.positionId = BigInt(contract.positionId);

      // kalau userId ikut berubah nanti
      // employee.userId = ...

      await this.employeeRepository.update(tx, employee);

      const currentLocations =
        await this.employeeLocationRepository.findByEmployeeId(tx, employee.id);

      const currentIds = currentLocations.map((x) => x.locationId);

      const incomingIds = contract.locationIds.map((id) => BigInt(id));

      const toInsert = incomingIds.filter((id) => !currentIds.includes(id));

      const toDelete = currentIds.filter((id) => !incomingIds.includes(id));

      if (toDelete.length) {
        await this.employeeLocationRepository.deleteByEmployeeAndLocationIds(
          tx,
          employee.id,
          toDelete
        );
      }
      if (toInsert.length) {
        await this.employeeLocationRepository.createMany(
          tx,
          employee.id,
          toInsert
        );
      }
    });
    return (await this.employeeRepository.findById(this.prisma, employee.id))!;
  }
}
