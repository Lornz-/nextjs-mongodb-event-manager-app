import handler from '@/pages/api/events';
import { testClient } from '@/lib/helpers/testClient';
import db from '@/lib/helpers/testHelpers';

const request = testClient(handler);

// Setup connection to the database
beforeAll(async () => await db.connect());
afterAll(async () => await db.close());
beforeEach(async () => await db.clear());

describe('POST /api/events', () => {
  it('should failed with missing required fields', (done) => {
    request
      .post('/api/events')
      .send({ name: 'my event', description: 'This is an awesome event' })
      .expect(500)
      .then((res) => {
        expect(res.body.success).toBeFalsy();
        done();
      });
  });
});
