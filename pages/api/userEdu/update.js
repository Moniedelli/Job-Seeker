import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id } = req.query;
  const { pendidikan_terakhir, tahun_mulai, tahun_selesai, nilai, organisasi, userId } = req.body;

  try {
    const updatedEducationHistory = await prisma.user_education_history.update({
      where: { id: parseInt(id, 10) },
      data: {
        pendidikan_terakhir,
        tahun_mulai,
        tahun_selesai,
        nilai,
        organisasi,
        user: {
            connect: { id: userId }
        }
    },
    });

    res.json(updatedEducationHistory);
  } catch (error) {
    console.error('Error updating job category:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
