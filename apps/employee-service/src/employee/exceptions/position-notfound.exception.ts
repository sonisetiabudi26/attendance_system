import { HttpStatus } from '@nestjs/common';

import { AppException } from '@attendance/common';

export class PositionNotFoundException
  extends AppException {

  constructor() {

    super(

      'POSITION_NOT_FOUND',

      'Position not found',

      HttpStatus.CONFLICT,

    );

  }

}