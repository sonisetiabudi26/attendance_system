import { Injectable } from '@nestjs/common';

import { MasterPosition } from '../../../prisma/generated/client';

import { PositionEntity } from '../entites/position.entity';

@Injectable()
export class PositionMapper {
  toEntity(
    model: MasterPosition,
  ): PositionEntity {
    return new PositionEntity(
      model.id,
      model.code,
      model.name,
      model.createdBy,
      model.updatedBy,
      model.createdAt,
      model.updatedAt,
    );
  }

  toEntities(
    models: MasterPosition[],
  ): PositionEntity[] {
    return models.map((model) =>
      this.toEntity(model),
    );
  }
}