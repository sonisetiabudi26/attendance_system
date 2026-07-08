import { PrismaClient } from '../generated/client';

export async function seedRoles(prisma: PrismaClient) {
  const superAdmin = await prisma.role.upsert({
    where: { code: 'SUPER_ADMIN' },
    update: {},
    create: {
      code: 'SUPER_ADMIN',
      name: 'Super Administrator',
      description: 'System Super Administrator',
    },
  });

  await prisma.role.upsert({
    where: { code: 'ADMIN' },
    update: {},
    create: {
      code: 'ADMIN',
      name: 'Administrator',
    },
  });

  await prisma.role.upsert({
    where: { code: 'HR' },
    update: {},
    create: {
      code: 'HR',
      name: 'Human Resource',
    },
  });

  await prisma.role.upsert({
    where: { code: 'EMPLOYEE' },
    update: {},
    create: {
      code: 'EMPLOYEE',
      name: 'Employee',
    },
  });

  return superAdmin;
}