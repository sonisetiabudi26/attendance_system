import { PrismaClient } from '../generated/client';

export async function seedMasterStatus(prisma: PrismaClient) {
  const active = await prisma.masterStatus.upsert({
    where: { code: 'ACTIVE' },
    update: {},
    create: {
      code: 'ACTIVE',
      name: 'Active',
      isDefault: true,
    },
  });

  await prisma.masterStatus.upsert({
    where: { code: 'INACTIVE' },
    update: {},
    create: {
      code: 'INACTIVE',
      name: 'Inactive',
    },
  });

  await prisma.masterStatus.upsert({
    where: { code: 'LOCKED' },
    update: {},
    create: {
      code: 'LOCKED',
      name: 'Locked',
    },
  });

  return active;
}