import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';

export const handleAPIDocs = (router: Router) =>
  router.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: '/swagger.json',
      },
    })
  );
