import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database';

import { RoleEntity } from '../entities';
import { RoleMapper } from '../mappers';
import { IRoleRepository } from '../interfaces';

@Injectable()
export class RoleRepository implements IRoleRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mapper: RoleMapper,
  ) {}

  async findByCode(code: string): Promise<RoleEntity | null> {
    const role = await this.prisma.role.findUnique({
      where: {
        code,
      },
    });

    if (!role) {
      return null;
    }

    return this.mapper.toEntity(role);
  }
}