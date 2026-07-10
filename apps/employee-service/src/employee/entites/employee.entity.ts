export class EmployeeEntity {
  id: bigint;

  userId?: bigint;

  employeeNo: string;

  fullName: string;

  phone?: string;

  photoUrl?: string;

  positionId: bigint;

  isDeleted: boolean;

  createdAt: Date;

  updatedAt: Date;

  deletedAt?: Date | null;
}