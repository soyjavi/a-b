import dotenv from 'dotenv';
import { Router } from 'express';
import { mail, render } from './common';

const { ADDRESS_BTC, AMOUNT_BTC } = process.env;
const router = Router();

router.post('/payment/bitcoin', async (req, res, next) => {
  const { email, address, ref } = Object.assign({}, req.params, req.query, req.body);
  let error = false;

  await mail({
    to: email,
    subject: 'Hemos recibido tu reserva',
    text: render('mail-payment-bitcoin', { address, amount: AMOUNT_BTC })
  }).catch(() => error = true);

  await mail({
    subject: 'Nuevo pago - AprendeBlockchain',
    text: render('mail-payment-bitcoin-admin', { address, email, ref, amount: AMOUNT_BTC })
  }).catch(() => error = true);

  res.json({
    success: !error,
    email,
    address,
    ref,
  });
});

export default router;
