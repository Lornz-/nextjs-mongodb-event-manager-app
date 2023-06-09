import handler from '@/pages/api/events';
import { testClient } from '@/lib/helpers/testClient';
import db from '@/lib/helpers/testHelper';
import { createEventValidated } from '@/services/event/createEventValidated';

const request = testClient(handler);

// Setup connection to the database
beforeAll(async () => await db.connect());
afterAll(async () => await db.close());
beforeEach(async () => await db.clear());

describe('GET /api/events', () => {
  describe('with no registered events', () => {
    it('should return no events successfully', (done) => {
      request
        .get('/api/events')
        .expect(200)
        .then((res) => {
          expect(res.body.events).toBeDefined();
          expect(res.body.events.length).toBe(0);
          done();
        });
    });
  });

  describe('with registered events', () => {
    beforeEach(async () => {
      const firstEvent = {
        name: 'event #1',
        description: 'description #1',
        startDate: new Date('2023-07-07').toISOString(),
        endDate: new Date('2023-07-09').toISOString(),
      };
      const secondEvent = {
        name: 'event #2',
        description: 'description #2',
        startDate: new Date('2024-07-07').toISOString(),
        endDate: new Date('2024-07-09').toISOString(),
      };

      let newEvent = await createEventValidated(firstEvent);
      await newEvent.save();

      newEvent = await createEventValidated(secondEvent);
      await newEvent.save();
    });

    it('should return all registered events successfully', (done) => {
      request
        .get('/api/events')
        .expect(200)
        .then((res) => {
          expect(res.body.events).toBeDefined();
          expect(res.body.events.length).toBe(2);
          done();
        });
    });
  });
});
