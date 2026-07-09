import { NotFoundAppException } from '../../../../../libs/common/src/exceptions';

export class RoleNotFoundException extends NotFoundAppException {
  constructor() {
    super(
      'AUTH_ROLE_NOT_FOUND',
      'Role not found',
    );
  }
}