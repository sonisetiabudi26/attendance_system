import { Provider } from '@nestjs/common';

import { REFRESH_TOKEN_REPOSITORY, USER_REPOSITORY,ROLE_REPOSITORY,MASTER_STATUS_REPOSITORY,JWT_SERVICE, PASSWORD_SERVICE  } from './constants';

import { PasswordService,JwtService } from './security/services';
import { UserRepository, RefreshTokenRepository,RoleRepository,MasterStatusRepository } from './repositories';
import { RefreshTokenMapper, RoleMapper, MasterStatusMapper, UserMapper } from './mappers';
import { AuthService } from './services/auth.service';


export const authProviders: Provider[] = [
    UserMapper, RefreshTokenMapper, RoleMapper,
    MasterStatusMapper,AuthService,
    {
        provide: USER_REPOSITORY,
        useClass: UserRepository,
    },
    {
        provide: PASSWORD_SERVICE,
        useClass: PasswordService,
    },
     {
        provide: JWT_SERVICE,
        useClass: JwtService,
    },
    {
        provide: REFRESH_TOKEN_REPOSITORY,
        useClass: RefreshTokenRepository,
    },
    {
        provide: ROLE_REPOSITORY,
        useClass: RoleRepository,
    },

    {
        provide: MASTER_STATUS_REPOSITORY,
        useClass: MasterStatusRepository,
    },
];