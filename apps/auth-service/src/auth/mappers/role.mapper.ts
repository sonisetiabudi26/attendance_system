import { Injectable } from '@nestjs/common';

import { Role } from '../../../prisma/generated/client';
import { RoleEntity } from '../entities';

@Injectable()
export class RoleMapper {
  toEntity(model: Role): RoleEntity {
    return new RoleEntity(
      model.id,
      model.code,
      model.name,
      model.description,
      model.createdAt,
      model.updatedAt,
    );
  }
}