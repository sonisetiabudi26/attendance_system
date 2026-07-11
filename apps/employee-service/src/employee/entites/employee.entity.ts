import { PositionEntity } from './position.entity';
import { LocationEntity } from './location.entity';

 
export class EmployeeEntity {
  constructor(
    public readonly id: bigint,

    public userId: bigint | null,

    public employeeNo: string,

    public fullName: string,

    public phone: string | null,

    public photoUrl: string | null,

    public positionId: bigint,

    public isDeleted: boolean,

    public readonly createdAt: Date,

    public updatedAt: Date,

    public deletedAt: Date | null,

    public position?: PositionEntity,

    public employeeLocations?: LocationEntity[],
  ) {}

}