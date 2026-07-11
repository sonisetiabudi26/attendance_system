import { Provider } from '@nestjs/common';

import { REFRESH_TOKEN_REPOSITORY, USER_REPOSITORY, ROLE_REPOSITORY, MASTER_STATUS_REPOSITORY, JWT_SERVICE, PASSWORD_SERVICE, PERMISSION_REPOSITORY } from './constants';

import { PasswordService, JwtService } from './security/services';
import { RefreshTokenMapper, RoleMapper, MasterStatusMapper, UserMapper, PermissionMapper } from './mappers';
import { UserPrismaRepository } from './repositories/prisma/user-repo.prisma';
import { RolePrismaRepository } from './repositories/prisma/role-repo.prisma';
import { PermissionPrismaRepository } from './repositories/prisma/permission.prisma';
import { LoginService } from './services/login.service';
import { RefreshTokenPrismaRepository } from './repositories/prisma/refreshtoken-repo.prisma';
import { MasterStatusPrismaRepository } from './repositories/prisma/master-status.prisma';
import { LoginResponseMapper } from './mappers/login-resp.mapper';
import { AuthGrpcMapper } from './grpc/authgrpc.mapper';
import { CreateUserService } from './services';



export const authProviders: Provider[] = [
    LoginService,
    //   LogoutService,
    //   RefreshTokenService,
    //   VerifyAccessTokenService,
      CreateUserService,
    //   ChangePasswordService,

    PasswordService,
    JwtService,
    UserMapper,
    RoleMapper,
    PermissionMapper,
    RefreshTokenMapper,
    MasterStatusMapper,
    LoginResponseMapper,
    AuthGrpcMapper,
    {
        provide: MASTER_STATUS_REPOSITORY,
        useClass: MasterStatusPrismaRepository,
    },

    {
        provide: USER_REPOSITORY,
        useClass: UserPrismaRepository,
    },

    {
        provide: ROLE_REPOSITORY,
        useClass: RolePrismaRepository,
    },

    {
        provide: PERMISSION_REPOSITORY,
        useClass: PermissionPrismaRepository,
    },

    {
        provide: REFRESH_TOKEN_REPOSITORY,
        useClass: RefreshTokenPrismaRepository,
    },
]