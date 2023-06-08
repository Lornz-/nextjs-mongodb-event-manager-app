import mongoose from 'mongoose';
import db from '@/lib/helpers/testHelpers';
import Event from '@/models/event';

// Setup connection to the database
beforeAll(async () => await db.connect());
afterAll(async () => await db.close());
beforeEach(async () => await db.clear());

describe('Create a new event', () => {
  const event = {
    name: 'name',
    description: 'description',
  };

  it('should fail without required fields', async () => {
    const invalidEvent = {
      name: 'name',
    };

    try {
      const newEvent = new Event(invalidEvent);
      await newEvent.save();
    } catch (error) {
      expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
      expect(error.errors.description).toBeDefined();
      expect(error.errors.startDate).toBeDefined();
      expect(error.errors.endDate).toBeDefined();
    }
  });

  it('should fail when start date less than today', async () => {
    const invalidEvent = {
      ...event,
      startDate: new Date('2023-07-09').toISOString(),
      endDate: new Date('2023-07-07').toISOString(),
    };

    try {
      const newEvent = new Event(invalidEvent);
      await newEvent.save();
    } catch (error) {
      expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
      expect(error.errors.endDate).toBeDefined();
    }
  });

  it('should fail when start date greater than end date', async () => {
    const invalidEvent = {
      ...event,
      startDate: new Date(
        new Date().setDate(new Date().getDate() - 1)
      ).toISOString(),
      endDate: new Date('2023-07-07').toISOString(),
    };

    try {
      const newEvent = new Event(invalidEvent);
      await newEvent.save();
    } catch (error) {
      console.log(error.errors);
      expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
      expect(error.errors.startDate).toBeDefined();
    }
  });

  it('should create a new event successfully', async () => {
    const validEvent = {
      ...event,
      startDate: new Date('2023-07-07').toISOString(),
      endDate: new Date('2023-07-09').toISOString(),
    };
    const newEvent = await Event(validEvent);
    await newEvent.save();

    expect(newEvent._id).toBeDefined();
    expect(newEvent.name).toBe(validEvent.name);
    expect(newEvent.description).toBe(validEvent.description);
    expect(newEvent.startDate.toISOString()).toBe(validEvent.startDate);
    expect(newEvent.endDate.toISOString()).toBe(validEvent.endDate);
  });
});
