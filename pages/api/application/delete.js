const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id_aplikasi } = req.query;

  try {
    await prisma.application.delete({
      where: { id_aplikasi: parseInt(id_aplikasi, 10) },
    });

    res.json({ message: 'Application deleted successfully' });
  } catch (error) {
    console.error('Error deleting application:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
