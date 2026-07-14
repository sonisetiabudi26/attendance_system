import { Module } from "@nestjs/common";
import { AuthService } from "../auth/services/auth.service";
import { AuthController } from "../auth/controllers/auth.controller";
import { JwtAuthGuard } from "../jwt/jwt-auth.guard";
import { EmployeeService } from "../employee/services/employee.service";

@Module({
  controllers: [
    AuthController,
  ],
  providers: [
    AuthService,
    JwtAuthGuard,EmployeeService
  ],
   exports: [
    AuthService,EmployeeService
  ],
})
export class AuthModule {}