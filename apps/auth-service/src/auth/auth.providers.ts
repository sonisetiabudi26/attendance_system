import { Provider } from '@nestjs/common';

import { REFRESH_TOKEN_REPOSITORY, USER_REPOSITORY } from './constants';
import { PASSWORD_SERVICE } from './security/constants';
import { PasswordService } from './security/services';
import { UserMapper } from './mappers';
import { UserRepository } from './repositories';
import { RefreshTokenRepository } from './repositories/refresh-token.repository';
import { RefreshTokenMapper } from './mappers/refreshtoken.mapper';

export const authProviders: Provider[] = [
  UserMapper,RefreshTokenMapper,
  {
    provide: USER_REPOSITORY,
    useClass: UserRepository,
  },
  {
    provide: PASSWORD_SERVICE,
    useClass: PasswordService,
  },
  {
   provide: REFRESH_TOKEN_REPOSITORY,
  useClass: RefreshTokenRepository,
  }
];