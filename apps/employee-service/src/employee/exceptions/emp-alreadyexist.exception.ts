import { HttpStatus } from '@nestjs/common';

import { AppException } from '@attendance/common';

export class EmployeeAlreadyExistsException
  extends AppException {

  constructor() {

    super(

      'EMPLOYEE_ALREADY_EXISTS',

      'Employee already exists',

      HttpStatus.CONFLICT,

    );

  }

}