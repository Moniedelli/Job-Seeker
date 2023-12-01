import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const totalJobs = await prisma.job.count();

  res.status(200).json({ totalJobs });
}
