// pages/api/job/[id].js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const job = await prisma.job.findUnique({
      where: {
        id: parseInt(id, 10),
      },
      include: {
        company: true,
      },
    });

    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    return res.status(200).json(job);
  } catch (error) {
    console.error('Error fetching job details:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
