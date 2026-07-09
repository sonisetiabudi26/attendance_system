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

  async findById(id: bigint): Promise<MasterStatusEntity | null> {
    const status = await this.prisma.masterStatus.findUnique({
      where: { id },
    });

    return status ? this.mapper.toEntity(status) : null;
  }

  async findDefault(): Promise<MasterStatusEntity | null> {
    const status = await this.prisma.masterStatus.findFirst({
      where: {
        isDefault: true,
      },
    });

    return status ? this.mapper.toEntity(status) : null;
  }
}