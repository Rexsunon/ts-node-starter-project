import { Router, Request, Response } from 'express';

import PingRoutes from './ping/routes';

const router = Router();

router.use('/ping', PingRoutes);

export default router;
