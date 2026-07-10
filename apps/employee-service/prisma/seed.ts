import { PrismaClient } from './generated/client';
import { seedMasterPosition } from './seeds/position.seed';
import { seedLocation } from './seeds/location.seed';

const prisma = new PrismaClient();

async function main() {
  await seedMasterPosition(prisma);
  await seedLocation(prisma);
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  });