import { PrismaClient } from './generated/client';

import {
  seedAdmin,
  seedMasterStatus,
  seedPermissions,
  seedRolePermissions,
  seedRoles,
} from './seeds';

const prisma = new PrismaClient();

async function main() {
  console.log('Start database seeding...');

  const activeStatus = await seedMasterStatus(prisma);

  const superAdmin = await seedRoles(prisma);

  await seedPermissions(prisma);

  await seedRolePermissions(prisma, superAdmin.id);

  await seedAdmin(prisma, superAdmin.id, activeStatus.id);

  console.log('✅ Database seeded successfully.');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });