import db from '@/lib/helpers/testHelper';
import { createEventValidated } from '@/services/event/createEventValidated';
import { getAllEvents } from '@/services/event/getAllEvents';

// Setup connection to the database
beforeAll(async () => await db.connect());
afterAll(async () => await db.close());
beforeEach(async () => await db.clear());

describe('Get all events', () => {
  it('should return none', async () => {
    const events = await getAllEvents();

    expect(events).toBeDefined();
    expect(events.length).toBe(0);
  });

  it('should return all registered events successfully', async () => {
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

    const events = await getAllEvents();

    expect(events).toBeDefined();
    expect(events.length).toBe(2);

    expect(events[0].name).toBe(firstEvent.name);
    expect(events[0].description).toBe(firstEvent.description);
    expect(events[0].startDate.toISOString()).toBe(firstEvent.startDate);
    expect(events[0].endDate.toISOString()).toBe(firstEvent.endDate);

    expect(events[1].name).toBe(secondEvent.name);
    expect(events[1].description).toBe(secondEvent.description);
    expect(events[1].startDate.toISOString()).toBe(secondEvent.startDate);
    expect(events[1].endDate.toISOString()).toBe(secondEvent.endDate);
  });
});
