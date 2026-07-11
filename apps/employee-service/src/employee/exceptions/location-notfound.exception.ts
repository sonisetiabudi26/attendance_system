import { HttpStatus } from '@nestjs/common';

import { AppException } from '@attendance/common';

export class LocationNotFoundException
  extends AppException {

  constructor() {

    super(

      'LOCATION_NOT_FOUND',

      'Location not found',

      HttpStatus.CONFLICT,

    );

  }

}