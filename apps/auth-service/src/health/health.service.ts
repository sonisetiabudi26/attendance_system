import { Injectable } from '@nestjs/common';

import { PrismaService } from '../database';

@Injectable()
export class HealthService {
  constructor(private readonly prisma: PrismaService) {}

  async check() {
    await this.prisma.$queryRaw`SELECT 1`;

    return {
      status: 'UP',
      database: 'CONNECTED',
      timestamp: new Date().toISOString(),
    };
  }
}