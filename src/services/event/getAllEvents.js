import { httpError } from '@/lib/helpers/HttpError';
import Event from '@/models/event';

/**
 * Gets all registered events.
 *
 * @async
 * @returns {Promise<{events: []}|{error: {message: string, code: number}}>} Resolves to an array of `events`
 * property, containing all registered events, or an `error`.
 * @throws {Error} If an error occurs while getting all events.
 */
export const getAllEvents = async () => {
  let events;

  try {
    events = await Event.find({});
  } catch (error) {
    console.log(error);
    throw new httpError(503, 'An error occurred while getting events.');
  }

  return events;
};
