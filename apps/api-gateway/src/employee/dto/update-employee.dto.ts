import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  ArrayNotEmpty,
} from 'class-validator';

// import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateEmployeeDto {
//   @ApiProperty({
//     example: 'Soni Setiabudi',
//   })
  @IsString()
  @IsNotEmpty()
  fullName: string;

//   @ApiProperty({
//     example: 'soni@mail.com',
//   })
  @IsEmail()
  email: string;

//   @ApiPropertyOptional({
//     example: 'Password@123',
//     description: 'Kosongkan jika tidak ingin mengubah password.',
//   })
  @IsNotEmpty()
  @IsString()
  password: string;

//   @ApiPropertyOptional({
//     example: '081234567890',
//   })
  @IsNotEmpty()
  @IsString()
  phone: string;

//   @ApiPropertyOptional({
//     example: 'https://cdn.domain.com/avatar.jpg',
//   })
  @IsNotEmpty()
  @IsString()
  photoUrl: string;

//   @ApiProperty({
//     example: '1',
//     description: 'Position ID',
//   })
  @IsString()
  @IsNotEmpty()
  positionId: string;

//   @ApiProperty({
//     type: [String],
//     example: ['1', '2'],
//     description: 'Assigned Location IDs',
//   })
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  locationIds: string[];
}