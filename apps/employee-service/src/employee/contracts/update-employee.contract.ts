export interface UpdateEmployeeContract {

    employeeId: bigint;

    fullName: string;

    email: string;

    password?: string;

    phone?: string;

    photoUrl?: string;

    positionId: bigint;

    locationIds: bigint[];

}