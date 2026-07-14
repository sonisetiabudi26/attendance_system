import { Inject, Injectable } from "@nestjs/common";
import { JWT_SERVICE, REFRESH_TOKEN_REPOSITORY } from "../constants";
import type { IJwtService } from "../security";
import { LogoutRequest } from "@attendance/proto/generated/auth";
import { AuthService } from "apps/api-gateway/src/auth/services/auth.service";
import type{ IRefreshTokenRepository } from "../repositories/interface";
import { PrismaService } from "../../database";

@Injectable()
export class LogoutService {
 constructor(

    @Inject(REFRESH_TOKEN_REPOSITORY)
    private readonly refreshTokenRepository: IRefreshTokenRepository,

    private readonly prisma: PrismaService,

  ) {}

  async execute(
   request: LogoutRequest,
  ): Promise<void> {

    await this.refreshTokenRepository.deleteByUserId(
      this.prisma,
      BigInt(request.userId),
    );

  }
}
