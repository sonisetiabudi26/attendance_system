import { Injectable } from '@nestjs/common';

import { MasterStatus } from '../../prisma/generated/client';
import { MasterStatusEntity } from '../entities';

@Injectable()
export class MasterStatusMapper {
  toEntity(model: MasterStatus): MasterStatusEntity {
    return new MasterStatusEntity(
      model.id,
      model.code,
      model.name,
      model.isDefault,
      model.createdAt,
      model.updatedAt,
    );
  }
}