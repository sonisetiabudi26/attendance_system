import { Type } from "class-transformer";
import { IsOptional } from "class-validator";

export class ListEmployeeDto {

    @IsOptional()
    @Type(() => Number)
    page = 1;

    @IsOptional()
    @Type(() => Number)
    limit = 10;

    @IsOptional()
    search?: string;

    @IsOptional()
    positionId?: string;

}