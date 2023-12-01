// Import the Prisma client
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { userId } = req.query;

  try {
    console.log('Fetching user data for userId:', userId);
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(userId),
      },
      include: {
        user_education_histories: true,
        user_job_histories: true,
      },
    });

    if (!user) {
      console.log('User not found.');
      return res.status(404).json({ error: 'User not found' });
    }

    console.log('User data:', user);
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}