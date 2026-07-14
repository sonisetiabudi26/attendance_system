import { IsArray, IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class CreateEmployeeDto {
  
  @IsString()
  employeeNo: string;

  
  @IsString()
  fullName: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  photoUrl?: string;

  @IsString()
  positionId: string;

  @IsArray()
  @IsString({ each: true })
  locationIds: string[];
}