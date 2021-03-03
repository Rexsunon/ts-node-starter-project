import { Request, Response, Router, NextFunction } from 'express';

import PingController from './controller/PingController';

const router = Router();

router.get('/', async (_req: Request, res: Response, _next: NextFunction) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.status(200).json({ success: true, data: response });
});

export default router;
