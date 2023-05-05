// utils/sendEmail.ts
import nodemailer from 'nodemailer';

const sendEmail = async (options: any) => {
    // Configure the email transport using Gmail SMTP
    const transport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });

    // Set up the email options
    const mailOptions = {
        from: options.from,
        to: options.to,
        subject: options.subject,
        text: options.text,
    };

    // Send the email
    await transport.sendMail(mailOptions);
};

export default sendEmail;
