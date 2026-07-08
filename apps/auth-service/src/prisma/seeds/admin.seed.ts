import { PrismaClient } from '../generated/client';
import * as argon2 from 'argon2';

export async function seedAdmin(
  prisma: PrismaClient,
  roleId: bigint,
  statusId: bigint,
) {
  const passwordHash = await argon2.hash('Admin123!');

  await prisma.user.upsert({
    where: {
      email: 'admin@attendance.local',
    },
    update: {},
    create: {
      username: 'admin',
      email: 'admin@attendance.local',
      passwordHash,
      roleId,
      statusId,
    },
  });
}