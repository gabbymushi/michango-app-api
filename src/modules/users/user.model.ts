import { Schema, Document, model, Types } from 'mongoose';
import bcrypt from 'bcryptjs';
export interface IUser extends Document {
    firstName?: string,
    middleName?: string,
    lastName?: string,
    dob?: string,
    gender?: string,
    phoneNumber?: string,
    email?: string,
    password: string,
    displayName?: string,
    comparePassword(candidatePassword: string): boolean,
    changePassword(password: string): any,
    hashPassword(password: string): string,
    toAuthJSON(): object,
}

const UserSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: [true, 'First name is required!'],
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required!'],
    },
    displayName: {
        type: String
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
            firstName: this.firstName,
            lastName: this.lastName,
            middleName: this.middleName,
            displayName: this.displayName,
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