import { Injectable } from "@nestjs/common";
import { UserEntity } from "../entities";
import { LoginResponseDto } from "../dto/response/login-resp.dto";

@Injectable()
export class LoginResponseMapper {

    toDto(
        user: UserEntity,
        accessToken: string,
        refreshToken: string,
        expiresIn: number,
    ): LoginResponseDto {

        return {
            accessToken,
            refreshToken,
            expiresIn,
            tokenType:"Bearer",
            user:{
                id:user.id,
                username:user.username,
                email:user.email,
                role:user.role.code,
            }
        };
    }
}