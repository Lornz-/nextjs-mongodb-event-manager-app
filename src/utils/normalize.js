import { isDateValid } from './date';

export const event = ({ name, description, startDate, endDate }) => {
  const event = {
    name,
    description,
  };

  if (isDateValid(startDate)) {
    const date = new Date(startDate);
    event.startDate = date.toISOString();
  }
  if (isDateValid(endDate)) {
    const date = new Date(endDate);
    event.endDate = date.toISOString();
  }

  return event;
};
