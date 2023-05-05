// pages/api/submitForm.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import sendEmail from '@/utils/sendEmail';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { name, email, phone, question } = req.body;

        try {
            await sendEmail({
                from: email,
                to: process.env.RECIPIENT_EMAIL,
                subject: 'New Contact Form Submission',
                text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nQuestion: ${question}`,
            });

            res.status(200).json({ status: 'success', message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ status: 'error', message: (error as Error).message });
        }
    } else {
        res.status(405).json({ status: 'error', message: 'Method not allowed' });
    }
};
