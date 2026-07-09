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

  async findById(id: bigint): Promise<RoleEntity | null> {
    const role = await this.prisma.role.findUnique({
      where: { id },
    });

    return role ? this.mapper.toEntity(role) : null;
  }

  async findByCode(code: string): Promise<RoleEntity | null> {
    const role = await this.prisma.role.findUnique({
      where: { code },
    });

    return role ? this.mapper.toEntity(role) : null;
  }
}