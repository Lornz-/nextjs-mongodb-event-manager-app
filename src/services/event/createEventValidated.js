import { httpError } from '@/lib/helpers/HttpError';
import { isDateValid } from '@/utils/date';
import Event from '@/models/event';

/**
 * Validates user input and creates a new event.
 *
 * @async
 * @param {object} userObj - An object containing user input data.
 * @param {string} userObj.name - The name of the new event.
 * @param {string} userObj.description - The description of the new event.
 * @param {string} userObj.startDate - The start date of the new event.
 * @param {string} userObj.endDate - The end date of the new event.
 * @returns {Promise<{event: {}}|{error: {message: string, code: number}}>} Resolves to an object with either a `event`
 * property, containing the newly created event document, or an `error`.
 * @throws {Error} If an error occurs while creating the event.
 */
export const createEventValidated = async ({
  name,
  description,
  startDate,
  endDate,
}) => {
  let event;

  if (!isDateValid(startDate)) {
    throw httpError(400, 'The entered start date is invalid.');
  }

  if (!isDateValid(endDate)) {
    throw httpError(400, 'The entered end date is invalid.');
  }

  if (new Date(startDate).getTime() < Date.now()) {
    throw httpError(
      400,
      'The event start date must be greater than or equal to the current date.'
    );
  }

  if (new Date(startDate).getTime() > new Date(endDate).getTime()) {
    throw httpError(
      400,
      'The event end date must be greater than or equal to the event start date.'
    );
  }

  try {
    event = await Event.create({ name, description, startDate, endDate });
  } catch (error) {
    console.error(error);
    throw httpError(503, 'An error occurred while creating the event.');
  }

  return event;
};
