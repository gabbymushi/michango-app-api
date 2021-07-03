import { Schema, Document, model } from 'mongoose';

export interface ICategory extends Document {
    name: string,
    icon: string
}

const CategorySchema = new Schema({
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

export const Category = model<ICategory>('Category', CategorySchema);