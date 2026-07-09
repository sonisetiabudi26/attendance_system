import { Provider } from '@nestjs/common';

import { REFRESH_TOKEN_REPOSITORY, USER_REPOSITORY,ROLE_REPOSITORY,MASTER_STATUS_REPOSITORY } from './constants';
import { PASSWORD_SERVICE } from './security/constants';
import { PasswordService } from './security/services';
import { UserRepository, RefreshTokenRepository,RoleRepository,MasterStatusRepository } from './repositories';
import { RefreshTokenMapper, RoleMapper, MasterStatusMapper, UserMapper } from './mappers';

export const authProviders: Provider[] = [
    UserMapper, RefreshTokenMapper,
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
    },
    RoleMapper,
    MasterStatusMapper,

    {
        provide: ROLE_REPOSITORY,
        useClass: RoleRepository,
    },

    {
        provide: MASTER_STATUS_REPOSITORY,
        useClass: MasterStatusRepository,
    },
];