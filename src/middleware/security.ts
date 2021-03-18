import { Router } from 'express';
import csurf from 'csurf';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

// export const handelCSRF = (router: Router) =>
//   router.use(csurf({ cookie: true }));

export const handleHTTPHeaders = (router: Router) => router.use(helmet());

export const handleRateLimit = (router: Router) => {
  const limit = rateLimit({
    max: 100, // limit each IP to 100 requests per windowMs
    windowMs: 30 * 60 * 1000, // 30 mins, the timeframe for which requests are checked/remembered.
    message: 'Too many request',
  });

  router.use(limit);
};
