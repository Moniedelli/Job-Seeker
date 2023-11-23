const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Retrieve applications with specified attributes
    const applications = await prisma.application.findMany({
      select: {
        id_aplikasi: true,
        job_id: true,
        tanggal_pengajuan: true,
        status: true,
      },
    });

    // Send JSON response with applications
    res.json(applications);
  } catch (error) {
    // Handle errors
    console.error('Error retrieving applications:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Disconnect Prisma client
    await prisma.$disconnect();
  }
}
