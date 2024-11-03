// src/pages/api/save-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email) {
      res.status(400).json({ message: 'Email is required' });
      return;
    }

    try {
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'purplesheepminecraft@gmail.com', 
          pass: 'PJ%JC7C85p%i^',
        },
      });

      // Set up email data
      const mailOptions = {
        from: 'purplesheepminecraft@gmail.com',
        to: 'samirraisharma@gmail.com',
        subject: 'New Signup',
        text: `New user signed up: ${email}`,
      };

      // Send mail
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
