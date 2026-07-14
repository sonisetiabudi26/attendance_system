import { Inject, Injectable } from "@nestjs/common";
import { JWT_SERVICE } from "../constants";
import type { IJwtService } from "../security";
import { VerifyAccessTokenResponse } from "@attendance/proto/generated/auth";

@Injectable()
export class VerifyAccessTokenService {
  constructor(
    @Inject(JWT_SERVICE)
    private readonly jwtService: IJwtService
  ) {}

  async execute(token: string): Promise<VerifyAccessTokenResponse> {
    const payload = await this.jwtService.verifyAccessToken(token);

    return {
      user: {
        sub: payload.sub,
        username: payload.username,
        email: payload.email,
        role: payload.role,
      },
    };
  }
}
