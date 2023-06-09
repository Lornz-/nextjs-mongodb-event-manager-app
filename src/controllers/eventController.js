import { responseHelper } from '@/lib/helpers/responseHelper';
import { createEventValidated } from '@/services/event/createEventValidated';

/**
 * Validates user input and creates a new event.
 *
 * @async
 * @param {object} userObj - An object containing user input data.
 * @param {string} userObj.name - The name of the new event.
 * @param {string} userObj.description - The description of the new event.
 * @param {string} userObj.startDate - The start date of the new event.
 * @param {string} userObj.endDate - The end date of the new event.
 * @returns {Promise<{user: {}}|{error: {message: string, code: number}}>} Resolves to an object with either a `event`
 * property, containing the newly created event document, or an `error`.
 * @throws {Error} If an error occurs while creating the event.
 */
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
