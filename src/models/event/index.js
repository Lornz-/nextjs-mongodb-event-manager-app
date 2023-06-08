import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  name: {
    /* The name of the event */
    type: String,
    required: [true, 'Please provide a name for this event.'],
    maxLength: [32, 'Name cannot be more than 32 characters.'],
  },
  description: {
    /* The description of the event */
    type: String,
    required: [true, 'Please provide a description for this event.'],
    maxLength: [200, 'Description cannot be more than 200 characters'],
  },
  startDate: {
    /* When the event starts */
    type: Date,
    required: [true, 'Please provide a start date for this event.'],
    validate: {
      validator: function (input) {
        /* return true only if the input is a valid date, AND is
      greater than or equal to the current date/time */
        const date = new Date(input);
        return !isNaN(date) && date.getTime() >= Date.now();
      },
      message: () =>
        `Start date must be greater than or equal to the current date.`,
    },
  },
  endDate: {
    /* When the event ends */
    type: Date,
    required: [true, 'Please provide an end date for this event.'],
    validate: {
      validator: function (value) {
        const endDate = new Date(value);
        const isDatesValid = !isNaN(this.startDate) && !isNaN(endDate);
        return isDatesValid && this.startDate.getTime() <= endDate.getTime();
      },
      message: () =>
        `End date must be greater than or equal to the event start date.`,
    },
  },
});

export default mongoose.models.Event || mongoose.model('Event', EventSchema);
