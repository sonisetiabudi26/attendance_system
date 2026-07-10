// dto/request/create-employee.req.dto.ts

import {
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateEmployeeRequestDto {

  @IsString()
  @IsNotEmpty()
  employeeNo: string;

  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  photoUrl?: string;

  positionId: bigint;

  username: string;

  email: string;

  password: string;

}