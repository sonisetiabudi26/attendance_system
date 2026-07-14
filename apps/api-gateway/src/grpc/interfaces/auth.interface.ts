import { Observable } from 'rxjs';

import {
    LoginRequest,
    LoginResponse,
    RefreshTokenRequest,
    LogoutRequest,
    Empty,
    VerifyAccessTokenRequest,
    VerifyAccessTokenResponse,
    ChangePasswordRequest,
} from '@attendance/proto/generated/auth';

export interface AuthGrpcService {

    Login(
        request: LoginRequest,
    ): Observable<LoginResponse>;

    RefreshToken(
        request: RefreshTokenRequest,
    ): Observable<LoginResponse>;


    Logout(
        request: LogoutRequest,
    ): Observable<Empty>;

    VerifyAccessToken(
        request: VerifyAccessTokenRequest,
    ): Observable<VerifyAccessTokenResponse>;

    ChangePassword(
        request: ChangePasswordRequest,
    ): Observable<Empty>;

     ChangePassword(
        request: ChangePasswordRequest,
    ): Observable<Empty>;

}