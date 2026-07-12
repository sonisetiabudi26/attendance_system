import {
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsString,
} from 'class-validator';

import { DeviceType } from '@attendance/proto/generated/auth';

export class LoginDto {
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsEnum(DeviceType)
    deviceType: DeviceType;

    @IsString()
    deviceName: string;

    @IsString()
    ipAddress: string;

    @IsString()
    userAgent: string;
}