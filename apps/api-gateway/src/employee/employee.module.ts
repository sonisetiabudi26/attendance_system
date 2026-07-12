import { Module } from "@nestjs/common";
import { AuthService } from "../auth/services/auth.service";
// // import { AuthController } from "../auth/controllers/auth.controller";
import { JwtAuthGuard } from "../jwt/jwt-auth.guard";
import { EmployeeController } from "./controllers/employee.controller";
import { EmployeeService } from "./services/employee.service";

@Module({
  controllers: [
    EmployeeController
  ],
  providers: [
    EmployeeService,AuthService,
    JwtAuthGuard
  ],
   exports: [
    EmployeeService,AuthService
  ],
})
export class EmployeeModule {}