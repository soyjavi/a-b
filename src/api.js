import dotenv from 'dotenv';
import { Router } from 'express';
import { mail, render } from './common';

const { ADDRESS_BTC, AMOUNT_BTC } = process.env;
const router = Router();

router.post('/payment/bitcoin', async (req, res, next) => {
  const { email, address } = Object.assign({}, req.params, req.query, req.body);
  let error = false;

  await mail({
    to: email,
    subject: 'Hemos recibido tu solicitud',
    text: render('mail-payment-bitcoin', { address, amount: AMOUNT_BTC })
  }).catch(() => error = true);


  const adminMail = await mail({
    subject: 'Nuevo pago con Bitcoin',
    text: render('mail-payment-bitcoin', { address, email, amount: AMOUNT_BTC })
  }).catch(() => error = true);

  res.json({ success: !error });
});

export default router;
