import { Module } from "@nestjs/common";
// import { AuthService } from "../auth/services/auth.service";
// // import { AuthController } from "../auth/controllers/auth.controller";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";

@Module({
  controllers: [
    
  ],
  providers: [
    
    JwtAuthGuard
  ],
   exports: [
    
  ],
})
export class EmployeeeModule {}