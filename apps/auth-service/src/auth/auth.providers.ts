import { Provider } from '@nestjs/common';

import { USER_REPOSITORY } from './constants';
import { UserMapper } from './mappers';
import { UserRepository } from './repositories';

export const authProviders: Provider[] = [
  UserMapper,
  {
    provide: USER_REPOSITORY,
    useClass: UserRepository,
  },
];