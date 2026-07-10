import { UnauthorizedAppException } from '../../../../../libs/common/src/exceptions';
export class InvalidPasswordException
  extends UnauthorizedAppException {

  constructor() {
    super(
      'AUTH_INVALID_PASSWORD',
      'Old password is incorrect',
    );
  }
}