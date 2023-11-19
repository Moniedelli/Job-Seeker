import prisma from '../../prismadb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
        const userData = req.body;
    
        if (userData.tgl_lahir) {
          const formattedDateTime = new Date(userData.tgl_lahir).toISOString();
          userData.tgl_lahir = formattedDateTime;
        }      
    
        const user = await prisma.user.create({
          data: userData
        });
  
        res.json(user);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
  }
}
