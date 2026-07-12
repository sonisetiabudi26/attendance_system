import {
    Body,
    Controller,
    Get,
    Post,
    Req,
    UseGuards,
} from '@nestjs/common';

import { EmployeeService } from '../services/employee.service';

import { LoginDto } from '../dto/login.dto';
import { Public } from '../decorators/public.decorator';
import { RefreshTokenDto } from '../dto/refresh-token.dto';
import { CurrentUser } from '../decorators/current-user.decorator';
import { UserClaims } from '@attendance/proto/generated/auth';
import { ChangePasswordDto } from '../dto/change-password.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import type { Request } from 'express';

@Controller('employee')
export class AuthController {
    constructor(
        private readonly employeeService: EmployeeService,
    ) { }

@Get("profile")
@UseGuards(JwtAuthGuard)
profile(
    @Req() req:any,
){

    return this.employeeService.getEmployeeByUserId(
         req.user.userId
    );

}
}