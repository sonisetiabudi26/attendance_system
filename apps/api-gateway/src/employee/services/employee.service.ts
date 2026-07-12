import { Inject, Injectable, OnModuleInit } from "@nestjs/common";

import type { ClientGrpc } from "@nestjs/microservices";

import { firstValueFrom } from "rxjs";

import { AUTH_GRPC } from "../../grpc/grpc.constant";

import { EmployeeGrpcClient } from "../../grpc/interfaces/employee.interface";

// import { LoginDto } from "../dto/login.dto";

import { AuthMapper } from "../mappers/auth.mapper";
import { VerifyAccessTokenResponse } from "@attendance/proto/generated/auth";
import { ChangePasswordDto } from "../dto/change-password.dto";
import { EmployeeResponse, GetEmployeeRequest } from "@attendance/proto/generated/employee";

@Injectable()
export class EmployeeService implements OnModuleInit {
  constructor(
    @Inject(AUTH_GRPC)
    private readonly client: ClientGrpc
  ) {}

  private employeeGrpcService: EmployeeGrpcClient;

  onModuleInit() {
    this.employeeGrpcService = this.client.getService<EmployeeGrpcClient>("EmployeeService");
  }

async getEmployeeByUserId(
  request: GetEmployeeRequest,
): Promise<EmployeeResponse> {

  return firstValueFrom(
    this.employeeGrpcService.getEmployeeByUserId(request),
  );

}
}