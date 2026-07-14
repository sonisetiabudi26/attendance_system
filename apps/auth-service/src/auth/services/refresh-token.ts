import { Inject, Injectable } from '@nestjs/common';

import { PrismaService } from '../../database/prisma.service';

import {
  JWT_SERVICE,
  PASSWORD_SERVICE,
  REFRESH_TOKEN_REPOSITORY,
  ROLE_REPOSITORY,
  USER_REPOSITORY,
} from '../constants';

import type {
  IJwtService,
  IPasswordService,
} from '../security/interfaces';

import type {
  IRefreshTokenRepository,
  IRoleRepository,
  IUserRepository,
} from '../repositories/interface';

import {
  InvalidCredentialException,
  InvalidRefreshTokenException,
  RoleNotFoundException,
} from '../exceptions';

import { LoginResponseContract } from '../contracts';

@Injectable()
export class RefreshTokenService {

  constructor(

    private readonly prisma: PrismaService,

    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository,

    @Inject(ROLE_REPOSITORY)
    private readonly roleRepository: IRoleRepository,

    @Inject(REFRESH_TOKEN_REPOSITORY)
    private readonly refreshTokenRepository: IRefreshTokenRepository,

    @Inject(PASSWORD_SERVICE)
    private readonly passwordService: IPasswordService,

    @Inject(JWT_SERVICE)
    private readonly jwtService: IJwtService,

  ) {}

  async execute(
    refreshToken: string,
  ): Promise<LoginResponseContract> {

    const payload =
      await this.jwtService.verifyRefreshToken(
        refreshToken,
      );

    const userId = BigInt(payload.sub);

    const savedToken =
      await this.refreshTokenRepository.findByUserId(
        this.prisma,
        userId,
      );

    if (!savedToken) {
      throw new InvalidRefreshTokenException();
    }

    const valid =
      await this.passwordService.verify(
        savedToken.tokenHash,
        refreshToken,
      );

    if (!valid) {
      throw new InvalidRefreshTokenException();
    }

    if (savedToken.expiresAt < new Date()) {
      throw new InvalidRefreshTokenException();
    }

    const user =
      await this.userRepository.findById(
        this.prisma,
        userId,
      );

    if (!user) {
      throw new InvalidCredentialException();
    }

    const role =
      await this.roleRepository.findById(
        this.prisma,
        user.roleId,
      );

    if (!role) {
      throw new RoleNotFoundException();
    }

    const accessToken =
      await this.jwtService.generateAccessToken({
        sub: user.id.toString(),
        username: user.username,
        role: role.code,
      });

    const newRefreshToken =
      await this.jwtService.generateRefreshToken({
        sub: user.id.toString(),
      });

    const refreshHash =
      await this.passwordService.hash(
        newRefreshToken,
      );

    await this.refreshTokenRepository.upsert(
      this.prisma,
      {
        userId: user.id,
        tokenHash: refreshHash,
        deviceType: savedToken.deviceType,
        deviceName: savedToken.deviceName ?? undefined,
        ipAddress: savedToken.ipAddress ?? undefined,
        userAgent: savedToken.userAgent ?? undefined,
        expiresAt: new Date(
          Date.now() + 7 * 24 * 60 * 60 * 1000,
        ),
      },
    );

    return {

      accessToken,

      refreshToken: newRefreshToken,

      tokenType: 'Bearer',

      expiresIn: 900,

    };

  }

}