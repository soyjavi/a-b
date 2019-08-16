import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

const {
  EMAIL_USERNAME, EMAIL_PASSWORD, EMAIL_PORT, EMAIL_HOST,
} = process.env;

export default async (to = 'hello@soyjavi.com', subject) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      // port: EMAIL_PORT,
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
          user: EMAIL_USERNAME,
          pass: EMAIL_PASSWORD,
      }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
      from: `"Aprende Blockchain 👻" <${EMAIL_USERNAME}>`, // sender address
      to,
      subject: 'Hello ✔',
      text: 'Hello world?',
      html: '<b>Hello world?</b>',
  }).catch(error => console.log('error', error));

  if (info) {
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  }
}
