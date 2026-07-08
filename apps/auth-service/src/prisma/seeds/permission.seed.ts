import { PrismaClient } from '../generated/client';

export async function seedPermissions(prisma: PrismaClient) {
  const permissions = [
    'user.create',
    'user.read',
    'user.update',
    'user.delete',

    'role.create',
    'role.read',
    'role.update',
    'role.delete',

    'permission.read',
    'permission.assign',

    'employee.create',
    'employee.read',
    'employee.update',
    'employee.delete',

    'attendance.checkin',
    'attendance.checkout',
    'attendance.read',
    'attendance.approval',

    'dashboard.read',
  ];

  for (const code of permissions) {
    await prisma.permission.upsert({
      where: { code },
      update: {},
      create: {
        code,
        name: code,
      },
    });
  }
}