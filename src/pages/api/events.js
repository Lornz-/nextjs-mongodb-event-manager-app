// vendors
import { createRouter } from 'next-connect';

// middlewares
import middleware from '@/middlewares/middleware';
import { validateBody } from '@/middlewares/validateBody';

// utils
import { jsonParser } from '@/utils/bodyParser';
import { ValidateProps } from '@/config/constants';

// controllers
import * as eventController from '@/controllers/eventController';

const router = createRouter();

router
  .use(middleware)
  .post(
    jsonParser,
    validateBody(
      {
        type: 'object',
        properties: {
          name: ValidateProps.event.name,
          description: ValidateProps.event.description,
          startDate: ValidateProps.event.startDate,
          endDate: ValidateProps.event.endDate,
        },
        required: ['name', 'description', 'startDate', 'endDate'],
        additionalProperties: false,
      },
      true
    ),
    eventController.createEvent
  )
  .get(eventController.getEvents);

// this will run if none of the above matches
router.all((req, res) => {
  res.status(405).json({
    success: false,
    error: 'Method not allowed',
  });
});

export default router.handler({
  onError: (err, req, res) => {
    res.status(err.statusCode || 500).json({
      success: false,
      error: err.message,
    });
  },
  onNoMatch: (req, res) => {
    res.status(404).json({
      success: false,
      error: 'Page is not found',
    });
  },
});

export const config = {
  api: {
    externalResolver: true,
  },
};
