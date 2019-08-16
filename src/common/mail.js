import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

const {
  EMAIL_USERNAME, EMAIL_PASSWORD, EMAIL_PORT, EMAIL_HOST,
} = process.env;

export default async (to = 'hello@soyjavi.com', subject) => {
  const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      secure: true,
      auth: { user: EMAIL_USERNAME, pass: EMAIL_PASSWORD }
  });

  await transporter.sendMail({
      from: `"Aprende Blockchain 👻" <${EMAIL_USERNAME}>`, // sender address
      to,
      subject: 'Hello ✔',
      text: 'Hello world?',
      // html: '<b>Hello world?</b>',
  })
}
