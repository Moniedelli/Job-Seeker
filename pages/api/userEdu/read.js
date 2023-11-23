import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Define your endpoint function
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const educationHistory = await prisma.user_education_history.findMany({
      include: { job: true },
    });

    res.json(educationHistory);
  } catch (error) {
    console.error('Error retrieving education history:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}