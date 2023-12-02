import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  // Memastikan bahwa id adalah bilangan bulat positif
  const jobId = parseInt(id, 10);

  if (isNaN(jobId) || jobId <= 0) {
    return res.status(400).json({ error: 'Invalid job ID' });
  }

  try {
    const job = await prisma.job.findUnique({
      where: {
        id: jobId,
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

