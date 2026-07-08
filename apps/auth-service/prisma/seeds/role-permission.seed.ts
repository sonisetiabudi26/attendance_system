import { PrismaClient } from '../generated/client';

export async function seedRolePermissions(
  prisma: PrismaClient,
  roleId: bigint,
) {
  const permissions = await prisma.permission.findMany();

  for (const permission of permissions) {
    await prisma.rolePermission.upsert({
      where: {
        roleId_permissionId: {
          roleId,
          permissionId: permission.id,
        },
      },
      update: {},
      create: {
        roleId,
        permissionId: permission.id,
      },
    });
  }
}