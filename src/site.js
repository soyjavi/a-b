import dotenv from 'dotenv';
import { Router } from 'express';
import { render } from './common';

const {
  ADDRESS_BTC, AMOUNT_BTC, AMOUNT_FIAT,  AMOUNT_FIAT_DISCOUNT, RESERVATIONS_BTC, UDEMY_COUPON,
} = process.env;
const router = Router();

router.get('/pago-bitcoin', (req, res, next) => {
  res.redirect('/');
});

router.get('/', (req, res, next) => {
  const { query: { ref } } = req;
  const addresses = ADDRESS_BTC.split(',');
  const index = Math.floor(Math.random() * addresses.length);

  res.send(render('base', {
    role: 'home',
    content: render('home', {
      addressBTC: addresses[index],
      amountBTC: AMOUNT_BTC,
      amountFIAT: AMOUNT_FIAT,
      amountFIATDiscount: AMOUNT_FIAT_DISCOUNT,
      author: render('section-author'),
      ref,
      reservationsBTC: RESERVATIONS_BTC,
      udemyCoupon:UDEMY_COUPON,
    }),
    // script: render('scripts/drift'),
  }));
});

export default router;
