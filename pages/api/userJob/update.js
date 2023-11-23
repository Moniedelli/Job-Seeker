import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id } = req.query;
  const { pendidikan_terakhir, tahun_mulai, tahun_selesai, nilai, organisasi, userId } = req.body;

  try {
    const updatedJobHistory = await prisma.user_job_history.update({
      where: { id: parseInt(id, 10) },
      data: {
        pekerjaan_terdahulu: lastJob,
        perusahaan_terdahulu:lastCompany,
        tahun_mulai: startDate,
        tahun_selesai: finishDate,
        pengalaman_kerja: workExperience,
        keahlian: skill,
        user: {
            connect: { id: userId }
        }
    },
    });

    res.json(updatedJobHistory);
  } catch (error) {
    console.error('Error updating job category:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
