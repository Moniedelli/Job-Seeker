const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id_aplikasi, job_id, tanggal_pengajuan, status } = req.body;

  try {
    const createdApplication = await prisma.application.create({
      data: {
        id_aplikasi,
        job: {
          connect: { id: job_id }
        },
        tanggal_pengajuan,
        status,
      },
    });

    res.status(201).json(createdApplication);
  } catch (error) {
    console.error('Error creating application:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Disconnect Prisma client
    await prisma.$disconnect();
  }
}
