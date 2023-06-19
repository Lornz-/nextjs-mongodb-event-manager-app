export const eventsData = [
  {
    _id: '',
    name: 'My event #1',
    description: 'My description #1',
    startDate: new Date('2023-07-07').toISOString(),
    endDate: new Date('2023-07-10').toISOString(),
  },
  {
    _id: '',
    name: 'My event #2',
    description: 'My description #2',
    startDate: new Date('2023-08-07').toISOString(),
    endDate: new Date('2023-08-10').toISOString(),
  },
];

export const mockEvents = async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(eventsData));
};
