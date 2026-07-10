import {
  Employee,
} from '../../../prisma/generated/client';

import { EmployeeEntity } from '../entites/employee.entity';

export class EmployeeMapper {

  static toEntity(
    employee: Employee,
  ): EmployeeEntity {

    return {

      id: employee.id,

      userId: employee.userId ?? undefined,

      employeeNo: employee.employeeNo,

      fullName: employee.fullName,

      phone: employee.phone ?? undefined,

      photoUrl: employee.photoUrl ?? undefined,

      positionId: employee.positionId,

      isDeleted: employee.isDeleted,

      createdAt: employee.createdAt,

      updatedAt: employee.updatedAt,

      deletedAt: employee.deletedAt,

    };

  }

}