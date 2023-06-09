import { responseHelper } from '@/lib/helpers/responseHelper';
import { createEventValidated } from '@/services/event/createEventValidated';
import { getAllEvents } from '@/services/event/getAllEvents';

export const createEvent = responseHelper(async (req) => {
  const { name, description, startDate, endDate } = req.body;
  const event = await createEventValidated({
    name,
    description,
    startDate,
    endDate,
  });

  return { event };
});

export const getEvents = responseHelper(async () => {
  const events = await getAllEvents();

  return { events };
});
