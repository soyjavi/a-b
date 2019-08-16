import dotenv from 'dotenv';
import { Router } from 'express';
import { render } from './common';

const router = Router();
const { ADDRESS_BTC, AMOUNT_BTC } = process.env;


router.get('/pago-bitcoin', (req, res, next) => {
  res.send(render('base', {
    role: 'product',
    content: render('pago-bitcoin', {
      addressBTC: ADDRESS_BTC,
      amountBTC: AMOUNT_BTC,
    }),
    // script: render('scripts/drift'),
  }));
});

router.get('/', (req, res, next) => {
  res.send(render('base', {
    role: 'product',
    content: render('home', {
      amountBTC: AMOUNT_BTC,
    }),
    // script: render('scripts/drift'),
  }));
});

export default router;
