import { Schema, Document, model } from 'mongoose';

export interface IConfig extends Document {
    module: string,
    name: string,
    displayName: string,
    type: string,
    value: string
}

export interface ICONFIG {
    module: string,
    name: string,
    displayName: string,
    type: string,
    value?: string
}

const ConfigSchema = new Schema(
    {
        module: {
            type: String,
            required: [true, 'module is required'],
        },
        name: {
            type: String,
            required: [true, 'Config name is required'],
            trim: true
        },
        displayName: {
            type: String,
            required: [true, 'Displayn name is required'],
        },
        type: {
            type: String,
            required: [true, 'Type is required'],
            trim: true
        },
        value: {
            type: String,
            trim: true
        },
    },
    { timestamps: true },
);

export const Config = model<IConfig>('Config', ConfigSchema);
