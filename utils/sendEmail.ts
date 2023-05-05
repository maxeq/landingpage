// utils/sendEmail.ts
import nodemailer from 'nodemailer';


const sendEmail = async (options: any) => {
    // Configure the email transport using Gmail SMTP
    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // Enable TLS
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
        tls: {
            // Enable insecure mode to allow self-signed certificates
            rejectUnauthorized: false
        }
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
