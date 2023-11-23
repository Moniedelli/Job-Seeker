import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { lastJob, lastCompany, startDate, finishDate, workExperience, skill, userId } = req.body;
    try {
        const createdJobHistory = await prisma.user_job_history.create({
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
            }
        });
        res.json(createdJobHistory);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create job history' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
