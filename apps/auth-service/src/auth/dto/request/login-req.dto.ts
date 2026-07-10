import {
  IsEmail,
  MinLength,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { DeviceType } from '../../../../prisma/generated/client';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(100)
  password: string;

   @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  usernameOrEmail: string;

  @IsEnum(DeviceType)
  deviceType: DeviceType;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  deviceName?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  ipAddress?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  userAgent?: string;
}