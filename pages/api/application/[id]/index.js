//import the prisma client
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const createApplication = async (req, res) => {
    try {
        const { tgl_pengajuan, status, jobId, adminId } = req.body;

        // Check if required fields are provided
        if (!tgl_pengajuan || !status || !jobId || !adminId) {
            return res.status(400).json({ error: 'Incomplete data. Please provide all required fields.' });
        }

        // Check if the provided status is valid
        if (status !== 'confirm' && status !== 'confirmed') {
            return res.status(400).json({ error: 'Invalid status. Status should be "confirm" or "confirmed".' });
        }

        // Create a new application
        const application = await prisma.application.create({
            data: { tgl_pengajuan, status, jobId, adminId },
        });

        res.status(201).json(application); // 201 indicates successful creation
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
};
