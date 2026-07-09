import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database';

import { MasterStatusEntity } from '../entities';
import { MasterStatusMapper } from '../mappers';
import { IMasterStatusRepository } from '../interfaces';

@Injectable()
export class MasterStatusRepository
  implements IMasterStatusRepository
{
  constructor(
    private readonly prisma: PrismaService,
    private readonly mapper: MasterStatusMapper,
  ) {}

  async findDefault(): Promise<MasterStatusEntity | null> {
    const status = await this.prisma.masterStatus.findFirst({
      where: {
        isDefault: true,
      },
    });

    if (!status) {
      return null;
    }

    return this.mapper.toEntity(status);
  }
}