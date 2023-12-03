const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id_aplikasi, job_id, tanggal_pengajuan, status } = req.body;

  try {
    // Update application based on id_aplikasi
    const updatedApplication = await prisma.application.update({
      where: { id_aplikasi: parseInt(id_aplikasi, 10) },
      data: {
        job: { connect: { job_id } },
        tanggal_pengajuan,
        status,
      },
    });

    res.json(updatedApplication);
  } catch (error) {
    // Handle errors
    console.error('Error updating application:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Disconnect Prisma client
    await prisma.$disconnect();
  }
}
