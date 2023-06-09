export const ValidateProps = {
  event: {
    name: { type: 'string', minLength: 4, maxLength: 32 },
    description: { type: 'string', minLength: 1, maxLength: 200 },
    startDate: { type: 'string' },
    endDate: { type: 'string' },
  },
};
