import { Injectable } from '@nestjs/common';

import { RefreshToken } from '../../../prisma/generated/client';

import { RefreshTokenEntity } from '../entities';


@Injectable()
export class RefreshTokenMapper {
  toEntity(model: RefreshToken): RefreshTokenEntity {
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
}