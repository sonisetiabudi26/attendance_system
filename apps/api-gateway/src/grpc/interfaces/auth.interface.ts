import { Observable } from 'rxjs';

import {
  LoginRequest,
  LoginResponse,
  RefreshTokenRequest,
  LogoutRequest,
  Empty,
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
}