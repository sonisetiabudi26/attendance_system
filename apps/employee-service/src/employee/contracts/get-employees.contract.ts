export interface GetEmployeesContract {
    page: number;
    limit: number;
    search?: string;
    positionId?: bigint;

}