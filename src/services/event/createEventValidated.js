import { httpError } from '@/lib/helpers/HttpError';
import isDateValid from '@/utils/isDateValid';
import Event from '@/models/event';

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
