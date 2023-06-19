import { rest } from 'msw';

import { mockEvents } from '@/mocks/resolvers/mockEvents';

export const eventHandlers = [
  rest.get('/api/events', mockEvents),

  rest.post('/api/events', async (req, res, ctx) => {
    const { name, description, startDate, endDate } = await req.json();

    return res(
      ctx.status(200),
      ctx.json({
        _id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        name,
        description,
        startDate,
        endDate,
      })
    );
  }),
];
