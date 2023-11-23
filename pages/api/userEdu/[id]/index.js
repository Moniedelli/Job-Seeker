const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id } = req.query;

  try {
    const educationHistory = await prisma.user_education_history.findUnique({
      where: { id: parseInt(id, 10) },
      include: { job: true },
    });

    if (!educationHistory) {
      return res.status(404).json({ error: 'Education history not found' });
    }

    res.json(educationHistory);
  } catch (error) {
    console.error('Error retrieving education history by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}