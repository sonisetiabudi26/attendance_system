import { UnauthorizedAppException } from '../../../../../libs/common/src/exceptions';

export class InactiveUserException extends UnauthorizedAppException {
  constructor() {
    super(
      'AUTH_USER_INACTIVE',
      'User account is inactive',
    );
  }
}