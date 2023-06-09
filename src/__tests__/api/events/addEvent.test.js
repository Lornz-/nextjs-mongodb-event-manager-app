import handler from '@/pages/api/events';
import { testClient } from '@/lib/helpers/testClient';
import db from '@/lib/helpers/testHelper';

const request = testClient(handler);

// Setup connection to the database
beforeAll(async () => await db.connect());
afterAll(async () => await db.close());
beforeEach(async () => await db.clear());

describe('POST /api/events', () => {
  const body = {
    name: 'my event',
    description: 'This is an awesome event',
  };

  it('should fail with missing required fields', (done) => {
    request
      .post('/api/events')
      .send(body)
      .expect(400)
      .then((res) => {
        expect(res.body.error).toBeTruthy();
        done();
      });
  });

  it('should add a new event successfully', (done) => {
    const validBody = {
      ...body,
      startDate: new Date('2024-07-07').toISOString(),
      endDate: new Date('2024-07-09').toISOString(),
    };
    request
      .post('/api/events')
      .send(validBody)
      .expect(200)
      .then((res) => {
        expect(res.body.event._id).toBeDefined();
        expect(res.body.event.name).toBe(validBody.name);
        expect(res.body.event.description).toBe(validBody.description);
        expect(res.body.event.startDate).toBe(validBody.startDate);
        expect(res.body.event.endDate).toBe(validBody.endDate);
        done();
      });
  });
});
