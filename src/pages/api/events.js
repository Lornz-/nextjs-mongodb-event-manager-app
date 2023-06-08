// vendors
import { createRouter } from 'next-connect';

// middlewares
import middleware from '@/middlewares/middleware';

// models
import Event from '@/models/event';

const router = createRouter();

router
  .use(middleware)
  .get(async (req, res) => {
    const events = await Event.find({});
    res.json({ success: true, data: events });
  })
  .post(async (req, res) => {
    const event = await Event.create(req.body);
    res.json({ success: true, data: event });
  });

// this will run if none of the above matches
router.all((req, res) => {
  res.status(405).json({
    success: false,
    error: 'Method not allowed',
  });
});

export default router.handler({
  onError(error, req, res) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  },
});
