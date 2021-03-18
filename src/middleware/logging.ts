import { Router } from 'express';
import expressWinston from 'express-winston';
import winston from 'winston';

const handelLogging = async (router: Router) => {
  router.use(
    expressWinston.logger({
      msg: 'HTTP {{req.method}} {{req.url}}',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
      ),
      transports: [
        new winston.transports.Console({ handleExceptions: true }),
        new winston.transports.File({
          filename: 'requestError.log',
          level: 'error',
        }),
      ],
    })
  );
};

export { handelLogging };
