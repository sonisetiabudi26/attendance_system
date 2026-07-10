export interface CreateEmployeeInput {
  employeeNo: string;

  fullName: string;

  phone?: string;

  photoUrl?: string;

  positionId: bigint;
}