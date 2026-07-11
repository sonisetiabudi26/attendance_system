import { EmployeeEntity } from "./employee.entity";
import { LocationEntity } from "./location.entity";

export class EmployeeLocationEntity {
  constructor(
    public readonly id: bigint,

    public employeeId: bigint,

    public locationId: bigint,

    public isDefault: boolean,

    public readonly createdAt: Date,

    public updatedAt: Date,

    public employee?: EmployeeEntity,

    public location?: LocationEntity,
  ) {}
}