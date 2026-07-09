import { UnauthorizedAppException } from '../../../../../libs/common/src/exceptions';

export class InvalidRefreshTokenException extends UnauthorizedAppException {
  constructor() {
    super(
      'AUTH_INVALID_REFRESH_TOKEN',
      'Invalid refresh token',
    );
  }
}