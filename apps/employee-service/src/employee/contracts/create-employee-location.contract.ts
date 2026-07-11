export interface CreateEmployeeLocationContract {
  employeeId: bigint;

  locationId: bigint;

  isDefault?: boolean;
}