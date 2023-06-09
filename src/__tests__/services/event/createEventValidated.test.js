import db from '@/lib/helpers/testHelper';
import { createEventValidated } from '@/services/event/createEventValidated';
import { HttpError } from '@/lib/helpers/HttpError';

// Setup connection to the database
beforeAll(async () => await db.connect());
afterAll(async () => await db.close());
beforeEach(async () => await db.clear());

describe('Create new event', () => {
  const event = {
    name: 'name',
    description: 'description',
  };

  it('should return an error for an invalid start date', async () => {
    const invalidEvent = {
      ...event,
      startDate: 'not a date',
      endDate: new Date('2023-07-07').toISOString(),
    };

    try {
      await createEventValidated(invalidEvent);
    } catch (error) {
      expect(error).toBeInstanceOf(HttpError);
      expect(error.status).toBe(400);
      expect(error.message).toBe('The entered start date is invalid.');
    }
  });

  it('should return an error for an invalid end date', async () => {
    const invalidEvent = {
      ...event,
      startDate: new Date('2023-07-07').toISOString(),
      endDate: 'not a date',
    };

    try {
      await createEventValidated(invalidEvent);
    } catch (error) {
      expect(error).toBeInstanceOf(HttpError);
      expect(error.status).toBe(400);
      expect(error.message).toBe('The entered end date is invalid.');
    }
  });

  it('should return an error when start date less than today', async () => {
    const invalidEvent = {
      ...event,
      startDate: new Date(
        new Date().setDate(new Date().getDate() - 1)
      ).toISOString(),
      endDate: new Date('2023-07-09').toISOString(),
    };

    try {
      await createEventValidated(invalidEvent);
    } catch (error) {
      expect(error).toBeInstanceOf(HttpError);
      expect(error.status).toBe(400);
      expect(error.message).toBe(
        'The event start date must be greater than or equal to the current date.'
      );
    }
  });

  it('should return an error when start date greater than end date', async () => {
    const invalidEvent = {
      ...event,
      startDate: new Date('2023-07-09').toISOString(),
      endDate: new Date('2023-07-07').toISOString(),
    };

    try {
      await createEventValidated(invalidEvent);
    } catch (error) {
      expect(error).toBeInstanceOf(HttpError);
      expect(error.status).toBe(400);
      expect(error.message).toBe(
        'The event end date must be greater than or equal to the event start date.'
      );
    }
  });

  it('should create a new event successfully', async () => {
    const validEvent = {
      ...event,
      startDate: new Date('2023-07-07').toISOString(),
      endDate: new Date('2023-07-09').toISOString(),
    };
    const newEvent = await createEventValidated(validEvent);
    await newEvent.save();

    expect(newEvent._id).toBeDefined();
    expect(newEvent.name).toBe(validEvent.name);
    expect(newEvent.description).toBe(validEvent.description);
    expect(newEvent.startDate.toISOString()).toBe(validEvent.startDate);
    expect(newEvent.endDate.toISOString()).toBe(validEvent.endDate);
  });
});
