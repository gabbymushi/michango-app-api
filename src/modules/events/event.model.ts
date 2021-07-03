import { Schema, Document, model } from 'mongoose';

export interface IEvent extends Document {
    name: string,
    icon: string
}

const EventSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name  is required!'],
    },
    icon: {
        type: String
    }

},
    { timestamps: true }
);

export const Event = model<IEvent>('Event', EventSchema);