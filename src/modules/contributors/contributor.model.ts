import { Schema, Document, model, Types } from 'mongoose';
import bcrypt from 'bcryptjs';

export enum USER_TYPES {
    USER = 'user',
    STAFF = 'staff',
    ROOT = 'root'
}
export interface IUser extends Document {
    fullName?: string,
    dob?: string,
    gender?: string,
    phoneNumber?: string,
    email?: string,
    password: string,
    displayName?: string,
    type?: string
    comparePassword(candidatePassword: string): boolean,
    changePassword(password: string): any,
    hashPassword(password: string): string,
    toAuthJSON(): object,
}

const UserSchema = new Schema<IUser>({
    fullName: {
        type: String,
        required: [true, 'First name is required!'],
    },
    dob: {
        type: String,
        required: [true, 'Birthday is required!'],
    },
    gender: {
        type: String,
        required: [true, 'Gender  is required!'],
    },
    phoneNumber: {
        type: String,
        required: [true, 'Phone number is required!'],
        unique: true,
        index: true
    },
    email: {
        type: String,
        index: true
    },
    type: {
        type: String,
        enum: [USER_TYPES],
        default: USER_TYPES.USER,
        index: true
    },
    password: {
        type: String,
        required: [true, 'Phone number is required!']
    }
},
    { timestamps: true }
);

UserSchema.methods = {
    comparePassword(candidatePassword: string): boolean {
        if (bcrypt.compareSync(candidatePassword, this.password)) {
            return true;
        } else {
            return false;
        }
    },
    changePassword(password: string) {
        return this.update({ password: this.hashPassword(password) })
    },
    hashPassword(password: string): string {
        return bcrypt.hashSync(password, 10);
    },
    toJSON() {
        return {
            _id: this._id,
            fullName: this.fullName,
            gender: this.gender,
            dob: this.dob,
            email: this.email,
            phoneNumber: this.phoneNumber
        };
    }
}

UserSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = this.hashPassword(this.password);
    next();
});

export const User = model<IUser>('User', UserSchema);