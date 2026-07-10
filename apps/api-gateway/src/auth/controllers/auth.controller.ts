import {
    Body,
    Controller,
    Get,
    Post,
} from '@nestjs/common';

import { AuthService } from '../services/auth.service';

import { LoginDto } from '../dto/login.dto';
import { Public } from '../decorators/public.decorator';
import { RefreshTokenDto } from '../dto/refresh-token.dto';
import { CurrentUser } from '../decorators/current-user.decorator';
import { UserClaims } from '@attendance/proto/generated/auth';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) { }

    @Post('login')
    @Public()
    login(
        @Body()
        dto: LoginDto,
    ) {
        return this.authService.login(dto);
    }
    @Post('refresh')
    @Public()
    refresh(
        @Body() dto: RefreshTokenDto,
    ) {
        return this.authService.refresh(
            dto.refreshToken,
        );
    }

    @Get("me")
    me(
        @CurrentUser() user: UserClaims,
    ) {
        return user;
    }

    @Post("logout")
    logout(
        @CurrentUser() user: UserClaims,
    ) {
        return this.authService.logout(
            BigInt(user.sub),
        );
    }
}