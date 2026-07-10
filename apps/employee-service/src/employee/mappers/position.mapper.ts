import { MasterPosition } from '../../../prisma/generated/client';
import { PositionEntity } from '../entites/position.entity';

export class PositionMapper {
  static toEntity(
    position: MasterPosition,
  ): PositionEntity {
    return {
      id: position.id,
      code: position.code,
      name: position.name,
      createdBy: position.createdBy ?? undefined,
      updatedBy: position.updatedBy ?? undefined,
      createdAt: position.createdAt,
      updatedAt: position.updatedAt,
    };
  }
}