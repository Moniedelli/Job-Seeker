const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Retrieve jobs with specified attributes
    const job = await prisma.job.findMany({
      select: {
        job_id: true,
        posisi_pekerjaan: true,
        deskripsi_pekerjaan: true,
        perusahaan: { select: { perusahaan_id: true, nama_perusahaan: true } },
        lokasi: true,
        gaji: true,
        jenis_pekerjaan: true,
        kategori_pekerjaan: true,
        tanggal_posting: true,
        user: { select: { user_id: true, nama_user: true } },
      },
    });

    // Send JSON response with jobs
    res.json(job);
  } catch (error) {
    // Handle errors
    console.error('Error retrieving job:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Disconnect Prisma client
    await prisma.$disconnect();
  }
}