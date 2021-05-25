import { ClientSession } from 'mongoose';
import { IUser, User } from './user.model';

export const createUser = async (body: IUser, session: ClientSession) => {
    try {
        const user = (await User.create([body], { session }))[0];

        return user;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getUsers = async () => {
    try {
        const users = await User.find();

        return users;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getUser = async (userId: string) => {
    try {
        const user = await User.findOne({ _id: userId });

        return user;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const deleteUser = async (userId: string) => {
    try {
        const user = await User.findOneAndDelete({ _id: userId });

        return user;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const updateUser = async (userId: string, body: IUser) => {
    try {
        let hasPasswordChanged = false;
        const { password } = body;

        if (password !== undefined) {
            hasPasswordChanged = true
        }

        const user = await User.findOneAndUpdate({ _id: userId }, { ...body }, { new: true });
        if (hasPasswordChanged && user) {
            await user.changePassword(password);
        }

        return user;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getUserByPhoneNumber = async (phoneNumber: any) => {
    try {
        const user = await User.findOne({ phoneNumber });

        return user;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getVendorUserByPhoneNumber = async (phoneNumber: any) => {
    try {
        const user = await User.findOne({ phoneNumber })
            .populate('vendor', 'id name logo')
            .populate({
                path: 'vendorsInfo',
                select: 'till -user status role',
                populate: {
                    path: 'vendor',
                    model: 'Vendor',
                    select: '_id name logo',
                }
            });

        return user;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const changePaymentPIN = async (userId: string, paymentPin: number) => {
    try {
        const user = await User.findOneAndUpdate({ _id: userId }, { paymentPin });

        return user;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const checkPaymentPIN = async (userId: string, paymentPin: number) => {
    try {
        const count = await User.countDocuments({ _id: userId, paymentPin });

        return count;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getBranchUsers = async (branchId: string) => {
    try {
        const users = await User.find({ branch: branchId });

        return users;
    } catch (e) {
        throw new Error(e.message);
    }
}