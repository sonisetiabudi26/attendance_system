import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import { EmployeeService } from "../services/employee.service";
import { JwtAuthGuard } from "../../jwt/jwt-auth.guard";
import type { Request } from "express";
import { Public } from "../decorators/public.decorator";
import { UpdateEmployeeRequest } from "@attendance/proto/generated/employee";
import { UpdateEmployeeDto } from "../dto/update-employee.dto";
import { CurrentUser } from '../decorators/current-user.decorator';
import { UserClaims } from '@attendance/proto/generated/auth';
import { ListEmployeeDto } from "../../auth/dto/list-employee.dto";

@Controller("api/v1/employee/")
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

   @Get("me")
      async me(
      @CurrentUser() user: UserClaims,
      ) {
          console.log(user);
          return this.employeeService.me(
              user,
          );
  
      }

    @Get()
    // @ApiBearerAuth("access-token")
    findAll(
        @Query() dto: ListEmployeeDto,
    ) {
          return this.employeeService.findAll({

                page: dto.page ?? 1,

                limit: dto.limit ?? 10,

                search: dto.search ?? "",

                positionId: dto.positionId ?? "",

            });
        

    }

    @Get("employeebyID/:employeeId")
    async getEmployeeById(@Param("employeeId") employeeId: number) {
    return this.employeeService.getEmployeeByUserId({
      userId:employeeId,
    });
  }
    @Get("positions")
    async getPosition() {
    return this.employeeService.listPosition();
  }

  
}
