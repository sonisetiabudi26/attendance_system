import { Injectable } from '@nestjs/common';

import {
  CreateEmployeeRequest,
  CreateEmployeeResponse,
  UpdateEmployeeRequest,
  UpdateEmployeeResponse,
} from '@attendance/proto/generated/employee';

import {
  CreateEmployeeContract,
  UpdateEmployeeContract,
} from '../contracts';

import {
  EmployeeEntity,
} from '../entites/employee.entity';

@Injectable()
export class EmployeeGrpcMapper {
  static toCreateEmployeeContract(request: CreateEmployeeRequest): CreateEmployeeContract {
    return {
      employeeNo: request.employeeNo,
      fullName: request.fullName,
      email: request.email,
      password: request.password,
      phone: request.phone,
      photoUrl: request.photoUrl,
      positionId: BigInt(request.positionId),
      locationIds: request.locationIds.map((x) => BigInt(x)),
    };
  }

  static toCreateEmployeeResponse(employee: EmployeeEntity): CreateEmployeeResponse {
    return {
      employeeId: employee.id.toString(),
    };
  }

  static toUpdateEmployeeContract(request: UpdateEmployeeRequest): UpdateEmployeeContract {
    return {
      employeeId:BigInt(request.employeeId),
      fullName:request.fullName,
      email:request.email,
      password:request.password || undefined,
      phone:request.phone,
      photoUrl: request.photoUrl,
      positionId: BigInt(request.positionId),
      locationIds: request.locationIds.map( id => BigInt(id)),
    };


  }
  static toUpdateEmployeeResponse(employee: EmployeeEntity): UpdateEmployeeResponse {
    return {
      employeeId: employee.id.toString(),
    };

  }
}