import { Schema, Document, model, Types } from 'mongoose';

export interface IEvent extends Document {
    name: string,
    venue: string,
    date: string
}

const EventSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Event name  is required!'],
    },
    date: {
        type: Date
    },
    venue: {
        type: String
    },
    owners: [{
        type: Types.ObjectId,
        ref: 'User'
    }]
},
    { timestamps: true }
);

export const Event = model<IEvent>('Event', EventSchema);