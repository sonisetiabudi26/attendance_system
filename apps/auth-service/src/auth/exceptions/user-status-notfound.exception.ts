import { NotFoundAppException } from '../../../../../libs/common/src/exceptions';

export class UserStatusNotFoundException extends NotFoundAppException {
  constructor() {
    super(
      'AUTH_STATUS_NOT_FOUND',
      'User status not found',
    );
  }
}