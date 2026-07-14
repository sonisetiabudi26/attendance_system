import { Injectable } from '@nestjs/common';

import {
  Prisma,
  RefreshToken,
} from '../../../prisma/generated/client';

import {
  CreateRefreshTokenContract,
} from '../contracts';

import {
  RefreshTokenEntity,
} from '../entities';

@Injectable()
export class RefreshTokenMapper {
  toEntity(
    model: RefreshToken,
  ): RefreshTokenEntity {
    return new RefreshTokenEntity(
      model.id,
      model.userId,
      model.tokenHash,
      model.deviceType,
      model.deviceName,
      model.ipAddress,
      model.userAgent,
      model.expiresAt,
      model.createdAt,
      model.updatedAt,
    );
  }

  toEntities(models: RefreshToken[]): RefreshTokenEntity[] {
    return models.map((model) => this.toEntity(model));
  }

  toCreateInput(
    contract: CreateRefreshTokenContract,
  ): Prisma.RefreshTokenCreateInput {
    return {
      tokenHash: contract.tokenHash,
      deviceType: contract.deviceType,
      deviceName: contract.deviceName,
      ipAddress: contract.ipAddress,
      userAgent: contract.userAgent,
      expiresAt: contract.expiresAt,
      user: {
        connect: {
          id: contract.userId,
        },
      },
    };
  }

  toDomain(
    model: RefreshToken,
  ): RefreshTokenEntity {
    return new RefreshTokenEntity(
      model.id,
      model.userId,
      model.tokenHash,
      model.deviceType,
      model.deviceName,
      model.ipAddress,
      model.userAgent,
      model.expiresAt,
      model.createdAt,
      model.updatedAt,
    );
  }
  // toUpdateInput(
  //   contract: UpdateRefreshTokenContract,
  // ): Prisma.RefreshTokenUpdateInput {
  //   const update: Prisma.RefreshTokenUpdateInput = {};

  //   if (contract.tokenHash !== undefined) {
  //     update.tokenHash = contract.tokenHash;
  //   }

  //   if (contract.expiresAt !== undefined) {
  //     update.expiresAt = contract.expiresAt;
  //   }

  //   return update;
  // }
}