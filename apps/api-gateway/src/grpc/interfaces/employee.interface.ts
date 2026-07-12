import { Observable } from 'rxjs';
import {
  CreateEmployeeRequest,
  CreateEmployeeResponse,
  UpdateEmployeeRequest,
  UpdateEmployeeResponse,
  DeleteEmployeeRequest,
  DeleteEmployeeResponse,
  GetEmployeeRequest,
  GetEmployeesRequest,
  GetEmployeesResponse,
//   GetEmployeeByUserIdRequest,
  EmployeeResponse,
  ListEmployeeRequest,
  ListEmployeeResponse,
  ListPositionRequest,
  ListPositionResponse,
  ListLocationRequest,
  ListLocationResponse,
} from '@attendance/proto/generated/employee';

export interface EmployeeGrpcClient {

  createEmployee(
    request: CreateEmployeeRequest,
  ): Observable<CreateEmployeeResponse>;

  updateEmployee(
    request: UpdateEmployeeRequest,
  ): Observable<UpdateEmployeeResponse>;

  deleteEmployee(
    request: DeleteEmployeeRequest,
  ): Observable<DeleteEmployeeResponse>;

  getEmployee(
    request: GetEmployeeRequest,
  ): Observable<EmployeeResponse>;

  getEmployeeByUserId(
    request: GetEmployeeRequest,
  ): Observable<EmployeeResponse>;

  getEmployees(
    request: GetEmployeesRequest,
  ): Observable<GetEmployeesResponse>;

  listEmployee(
    request: ListEmployeeRequest,
  ): Observable<ListEmployeeResponse>;

  listPosition(
    request: ListPositionRequest,
  ): Observable<ListPositionResponse>;

  listLocation(
    request: ListLocationRequest,
  ): Observable<ListLocationResponse>;

}