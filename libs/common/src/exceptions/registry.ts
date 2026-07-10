import { HttpException } from '@nestjs/common';

import {
    InvalidCredentialException,
    InvalidRefreshTokenException,
    InactiveUserException,
    RoleNotFoundException,
    InvalidPasswordException
} from '../../../../apps/auth-service/src/auth/exceptions';

type ExceptionConstructor = new () => HttpException;

export const ExceptionRegistry: Record<string,ExceptionConstructor> = {
    AUTH_INVALID_CREDENTIAL:
        InvalidCredentialException,

    AUTH_REFRESH_TOKEN_INVALID:
        InvalidRefreshTokenException,

    AUTH_USER_INACTIVE:
        InactiveUserException,

    AUTH_ROLE_NOT_FOUND:
        RoleNotFoundException,

    AUTH_INVALID_PASSWORD:
        InvalidPasswordException,
};