import { HttpStatus } from '@nestjs/common';

import { AppException } from '@attendance/common';

export class EmployeeNotFoundException
  extends AppException {

  constructor() {

    super(

      'EMPLOYEE_NOT_FOUND',

      'Employee not found',

      HttpStatus.CONFLICT,

    );

  }

}