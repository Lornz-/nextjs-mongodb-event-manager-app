import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  name: {
    /* The name of the event */
    type: String,
    required: true,
    maxLength: 32,
  },
  description: {
    /* The description of the event */
    type: String,
    required: true,
    maxLength: 200,
  },
  startDate: {
    /* When the event starts */
    type: Date,
    required: true,
  },
  endDate: {
    /* When the event ends */
    type: Date,
    required: true,
  },
});

export default mongoose.models.Event || mongoose.model('Event', EventSchema);
