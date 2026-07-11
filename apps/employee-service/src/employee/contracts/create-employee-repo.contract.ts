export interface CreateEmployeeRepoContract {

  userId:bigint;

  employeeNo: string;

  fullName: string;

  phone?: string;

  photoUrl?: string;

  positionId: bigint;

}