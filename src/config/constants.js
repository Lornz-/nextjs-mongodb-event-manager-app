export const ValidateProps = {
  event: {
    name: { type: 'string', minLength: 2, maxLength: 32 },
    description: { type: 'string', minLength: 2, maxLength: 250 },
    startDate: { type: 'string' },
    endDate: { type: 'string' },
  },
};

export const ErrorMessages = {
  event: {
    name: {
      required: 'Please enter the name of the event.',
      min: `Name needs to be between ${ValidateProps.event.name.minLength} to ${ValidateProps.event.name.maxLength} characters long.`,
      max: `Name needs to be between ${ValidateProps.event.name.minLength} to ${ValidateProps.event.name.maxLength} characters long.`,
    },
    description: {
      required: 'Please enter a description of the event.',
      min: `Description needs to be between ${ValidateProps.event.description.minLength} to ${ValidateProps.event.description.maxLength} characters long.`,
      max: `Description needs to be between ${ValidateProps.event.description.minLength} to ${ValidateProps.event.description.maxLength} characters long.`,
    },
    startDate: {
      required: 'Please specify when the event starts.',
      min: `Can't go back to the future Marty!`,
    },
    endDate: {
      required: 'Please specify when the event ends.',
      greaterThan: 'The end date must be later than the start date.',
    },
  },
};
