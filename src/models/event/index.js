// vendors
import mongoose from 'mongoose';

// constants
import { ValidateProps } from '@/config/constants';

const EventSchema = new mongoose.Schema({
  name: {
    /* The name of the event */
    type: String,
    required: true,
    maxLength: ValidateProps.event.name.maxLength,
  },
  description: {
    /* The description of the event */
    type: String,
    required: true,
    maxLength: ValidateProps.event.description.maxLength,
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
