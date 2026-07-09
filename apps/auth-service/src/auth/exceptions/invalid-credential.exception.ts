import { UnauthorizedAppException } from '../../../../../libs/common/src/exceptions';

export class InvalidCredentialException extends UnauthorizedAppException {
  constructor() {
    super(
      'AUTH_INVALID_CREDENTIAL',
      'Invalid username or password',
    );
  }
}