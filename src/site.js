import dotenv from 'dotenv';
import { Router } from 'express';
import { render } from './common';

const {
  ADDRESS_BTC, AMOUNT_BTC, AMOUNT_FIAT, RESERVATIONS_BTC,
} = process.env;
const router = Router();

router.get('/pago-bitcoin', (req, res, next) => {
  const { query: { ref } } = req;
  const addresses = ADDRESS_BTC.split(',');
  const index = Math.floor(Math.random() * addresses.length);

  res.send(render('base', {
    role: 'payment-bitcoin',
    content: render('payment-bitcoin', {
      addressBTC: addresses[index],
      amountBTC: AMOUNT_BTC,
      author: render('section-author'),
      ref,
      reservationsBTC: RESERVATIONS_BTC,
    }),
    // script: render('scripts/drift'),
  }));
});

router.get('/', (req, res, next) => {
  const { query: { ref } } = req;

  res.send(render('base', {
    role: 'home',
    content: render('home', {
      amountBTC: AMOUNT_BTC,
      amountFIAT: AMOUNT_FIAT,
      author: render('section-author'),
      ref,
      reservationsBTC: RESERVATIONS_BTC,
    }),
    // script: render('scripts/drift'),
  }));
});

export default router;
