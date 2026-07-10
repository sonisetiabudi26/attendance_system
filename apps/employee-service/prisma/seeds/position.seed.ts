import { PrismaClient } from '../generated/client';

export async function seedMasterPosition(
  prisma: PrismaClient,
) {
  const data = [
    {
      code: 'SUPER_ADMIN',
      name: 'Super Admin',
    },
    {
      code: 'HR',
      name: 'Human Resource',
    },
    {
      code: 'MANAGER',
      name: 'Manager',
    },
    {
      code: 'STAFF',
      name: 'Staff',
    },
  ];

  for (const item of data) {
    await prisma.masterPosition.upsert({
      where: {
        code: item.code,
      },
      update: {},
      create: item,
    });
  }
}