import { Router } from 'express';

const router = Router();

// Endpoints
router.get('/pago-bitcoin', (req, res, next) => {
  res.sendFile(__dirname + '/pages/pago-bitcoin.html', next);
});

router.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/pages/index.html', next);
});

export default router;
