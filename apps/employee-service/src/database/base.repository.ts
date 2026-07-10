import { PrismaService } from './prisma.service';

export abstract class BaseRepository {
  constructor(
    protected readonly prisma: PrismaService,
  ) {}

  protected getDb<T>(db?: T,): T | PrismaService {
    return db ?? this.prisma;
  }
}