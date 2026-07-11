import { Injectable } from '@nestjs/common';

import { Permission } from '../../../prisma/generated/client';

import { PermissionEntity } from '../entities';

@Injectable()
export class PermissionMapper {
  toEntity(
    model: Permission,
  ): PermissionEntity {
    return new PermissionEntity(
      model.id,
      model.code,
      model.name,
      model.description,
      model.createdAt,
      model.updatedAt,
    );
  }

  toEntities(
    models: Permission[],
  ): PermissionEntity[] {
    return models.map((model) =>
      this.toEntity(model),
    );
  }
}