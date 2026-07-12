export interface UpdateEmployeeContract {

    employeeId: number;

    fullName: string;

    email: string;

    password?: string;

    phone?: string;

    photoUrl?: string;

    positionId: bigint;

    locationIds: bigint[];

}