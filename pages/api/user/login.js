import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const {
            email,
            password,
        } = req.body;

        console.log(req.body);

        try {
            const user = await prisma.user.findFirst({
                where: {
                    email, password
                }
            });

            if (user) {
                return res.status(201).json(user);
            }
            res.status(403).json({
                message: "Login Gagal"
            })
        } catch (error) {
            console.error('Error creating user', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } finally {
            await prisma.$disconnect();
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}