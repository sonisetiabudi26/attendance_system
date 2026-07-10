import { NotFoundAppException } from '../../../../../libs/common/src/exceptions';

export class UserNotFoundException extends NotFoundAppException {
  constructor() {
    super(
      'AUTH_USER_NOT_FOUND',
      'User not found',
    );
  }
}