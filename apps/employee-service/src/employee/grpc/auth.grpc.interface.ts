import { UpdateCredentialRequest, UpdateCredentialResponse } from '@attendance/proto/generated/auth';
import { Observable } from 'rxjs';

export interface CreateUserRequest {
  employeeNo: string;
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

  updateCredential(
    request: UpdateCredentialRequest,
): Observable<UpdateCredentialResponse>;
}


