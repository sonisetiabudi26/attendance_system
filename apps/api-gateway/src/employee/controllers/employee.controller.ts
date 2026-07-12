import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from "@nestjs/common";
import { EmployeeService } from "../services/employee.service";
import { JwtAuthGuard } from "../../jwt/jwt-auth.guard";
import type { Request } from "express";
import { Public } from "../decorators/public.decorator";
import { UpdateEmployeeRequest } from "@attendance/proto/generated/employee";
import { UpdateEmployeeDto } from "../dto/update-employee.dto";

@Controller("api/v1/employee")
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get("profile")
  @UseGuards(JwtAuthGuard)
  profile(@Req() req: any) {
    return this.employeeService.getEmployeeByUserId(req.user.userId);
  }

  @Put("update-employee/:employeeId")
  // @ApiOperation({
  //   summary: 'Update Employee',
  // })
  // @ApiBearerAuth('access-token')
  async update(
    @Param("employeeId") employeeId: number,
    @Body() dto: UpdateEmployeeDto
  ) {
    return this.employeeService.updateEmployee({
      employeeId,
      ...dto,
    });
  }

  @Delete("delete-employee/:employeeId")
  async delete(@Param("employeeId") employeeId: string) {
    return this.employeeService.deleteEmployee({
      employeeId,
    });
  }
}
