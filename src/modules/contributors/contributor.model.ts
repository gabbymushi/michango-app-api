import { Schema, Document, model, Types } from 'mongoose';
import { IEvent } from '../events/event.model';

export interface IContributor extends Document {
    fullName: string,
    event: IEvent['_id'],
    title: string,
    phoneNumber?: string,
    email?: string,
    amount: number,
    paidAmount: number
}

const ContributorSchema = new Schema<IContributor>({
    event: {
        type: Types.ObjectId,
        ref: 'Event',
        required: [true, 'Event is required!'],
    },
    fullName: {
        type: String,
        required: [true, 'Fullname is required!'],
    },
    title: {
        type: String,
        enum: ['Mr', 'Mrs', 'Miss', 'Dr', 'Eng']
    },
    pledgedAmount: {
        type: Number,
        default: 0
    },
    paidAmount: {
        type: Number,
        default: 0
    },
    phoneNumber: {
        type: String,
        required: [true, 'Phone number is required!'],
        index: true
    },
    email: {
        type: String,
        index: true
    }
},
    { timestamps: true }
);

export const Contributor = model<IContributor>('Contributor', ContributorSchema);