import { PrismaClient } from '../generated/client';

export async function seedLocation(
  prisma: PrismaClient,
) {
  const data = [
    {
      locationName: 'Head Office',
      radius: 100,
    },
    {
      locationName: 'Warehouse',
      radius: 100,
    },
    {
      locationName: 'Remote',
      radius: 1000000,
    },
  ];

  for (const item of data) {
    await prisma.location.create({
      data: item,
    }).catch(() => {});
  }
}