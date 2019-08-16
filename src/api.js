import { Router } from 'express';

const router = Router();

router.post('/subscribe', (req, res, next) => {
  res.json({ pago: 'bitcoin' });
});

router.post('/mail', (req, res, next) => {
  res.json({ pago: 'bitcoin' });
});

export default router;
