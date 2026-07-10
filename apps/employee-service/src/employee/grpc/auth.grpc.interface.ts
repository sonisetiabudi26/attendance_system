import { Observable } from 'rxjs';

export interface CreateUserRequest {
  username: string;
  email: string;
  password: string;
  role: string;
}

export interface CreateUserResponse {
  userId: string;
}

export interface IAuthGrpcService {
  createUser(
    request: CreateUserRequest,
  ): Observable<CreateUserResponse>;
}