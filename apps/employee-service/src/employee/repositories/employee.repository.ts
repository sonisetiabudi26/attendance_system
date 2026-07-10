import {
  CreateEmployeeInput,
  EmployeeFilterInput,
  UpdateEmployeeInput,
} from '../contracts';

import { EmployeeEntity } from '../entites/employee.entity';
export interface IEmployeeRepository {
  create(
    input: CreateEmployeeInput,
  ): Promise<EmployeeEntity>;

  update(
    id: bigint,
    input: UpdateEmployeeInput,
  ): Promise<EmployeeEntity>;

  delete(
    id: bigint,
  ): Promise<void>;

  findById(
    id: bigint,
  ): Promise<EmployeeEntity | null>;

  findByEmployeeNo(
    employeeNo: string,
  ): Promise<EmployeeEntity | null>;

  findAll(
    filter: EmployeeFilterInput,
  ): Promise<EmployeeEntity[]>;

  existsByEmployeeNo(
    employeeNo: string,
  ): Promise<boolean>;
}