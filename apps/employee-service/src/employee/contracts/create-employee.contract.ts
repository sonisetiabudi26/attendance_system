export interface CreateEmployeeContract {
  employeeNo: string;

  fullName: string;

  email: string;
  
  password: string;

  phone?: string;

  photoUrl?: string;

  positionId: bigint;

  locationIds: bigint[];
}