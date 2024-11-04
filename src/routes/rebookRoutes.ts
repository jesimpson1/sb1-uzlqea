import { Router, Request, Response } from 'express';
import { validateApiKey, validateToken } from '../middleware/auth';
import { scheduleData } from '../data/scheduleData';

const router = Router();

router.get('/:token/rebook', validateApiKey, validateToken, (req: Request, res: Response) => {
  res.json(scheduleData);
});

router.post('/:token/rebook', validateApiKey, validateToken, (req: Request, res: Response) => {
  res.status(200).send();
});

export default router;