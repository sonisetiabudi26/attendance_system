import {
  CreateEmployeeInput,
  EmployeeFilterInput,
  UpdateEmployeeInput,
} from '../contracts';

import { EmployeeEntity } from '../entites/employee.entity';
export abstract class EmployeeRepository {

  abstract create(
    input: CreateEmployeeInput,
  ): Promise<EmployeeEntity>;

  abstract update(
    id: bigint,
    input: UpdateEmployeeInput,
  ): Promise<EmployeeEntity>;

  abstract delete(
    id: bigint,
  ): Promise<void>;

  abstract findById(
    id: bigint,
  ): Promise<EmployeeEntity | null>;

  abstract findByEmployeeNo(
    employeeNo: string,
  ): Promise<EmployeeEntity | null>;

  abstract findAll(
    filter: EmployeeFilterInput,
  ): Promise<EmployeeEntity[]>;

}