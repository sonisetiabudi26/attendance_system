import {
    Inject,
    Injectable,
    OnModuleInit,
} from '@nestjs/common';

import type { ClientGrpc } from '@nestjs/microservices';

import { firstValueFrom } from 'rxjs';

import { AUTH_GRPC } from '../../grpc/grpc.constant';

import { AuthGrpcService } from '../../grpc/interfaces/auth.interface';

import { LoginDto } from '../dto/login.dto';

import { AuthMapper } from '../mappers/auth.mapper';
import { VerifyAccessTokenResponse } from '@attendance/proto/generated/auth';

@Injectable()
export class AuthService
    implements OnModuleInit {
    constructor(
        @Inject(AUTH_GRPC)
        private readonly client: ClientGrpc,
    ) { }

    private authService: AuthGrpcService;

    onModuleInit() {
        this.authService =
            this.client.getService<AuthGrpcService>(
                'AuthService',
            );
    }

    async login(dto: LoginDto) {
        return firstValueFrom(
            this.authService.Login(
                AuthMapper.toLoginRequest(dto),
            ),
        );
    }
    async verifyAccessToken(
        accessToken: string,
    ): Promise<VerifyAccessTokenResponse> {
        return await firstValueFrom(
            this.authService.VerifyAccessToken({
                accessToken,
            }),
        );
    }
    async refresh(
        refreshToken: string,
    ) {
        return await firstValueFrom(
            this.authService.RefreshToken({
                refreshToken,
            }),
        );
    }

    async logout(
        userId: bigint,
    ): Promise<void> {
        await firstValueFrom(
            this.authService.Logout({
                userId: Number(userId),
            }),
        );
    }

}