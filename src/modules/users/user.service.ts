import { ClientSession } from 'mongoose';
import { IUser, User } from './user.model';
import * as userRepository from './user.repository';

export const createUser = async (body: any) => {
    const session = await User.startSession();
    session.startTransaction();
    try {

        const user = await userRepository.createUser(body, session);
        const displayName = `${user.firstName} ${user.lastName}`;
        if (user) {
        }

        await session.commitTransaction();
        session.endSession();

        return user;
    } catch (e) {
        await session.abortTransaction();
        session.endSession();

        throw new Error(e.message);
    }
}

export const createVendorAdmin = async (body: any) => {
    const session = await User.startSession();
    session.startTransaction();

    try {
        const user = await userRepository.createUser(body, session);

        await session.commitTransaction();
        session.endSession();

        return user;
    } catch (e) {
        await session.abortTransaction();
        session.endSession();

        throw new Error(e.message);
    }
}

export const createVendorUser = async (body: any, session: ClientSession) => {
    try {
        const user = await userRepository.createUser(body, session);

        return user;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getUsers = async () => {
    try {
        const user = await userRepository.getUsers();

        return user;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getUser = async (userId: any) => {
    try {
        const user = await userRepository.getUser(userId);

        return user;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const deleteUser = async (userId: string) => {
    try {
        const user = await userRepository.deleteUser(userId);
        if (user) {

        }

        return user;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const updateUser = async (userId: string, body: IUser) => {
    try {
        const user = await userRepository.updateUser(userId, body);

        return user;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getUserByPhoneNumber = async (phoneNumber: any) => {
    try {
        const user = await userRepository.getUserByPhoneNumber(phoneNumber);

        return user;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const isValidPyamentPIN = async (userId: string, paymentPIN: number) => {
    try {
        const count = await userRepository.checkPaymentPIN(userId, paymentPIN);

        return (count > 0 ? true : false);
    } catch (e) {
        throw new Error(e.message);
    }
}

export const changePaymentPIN = async (userId: string, oldPaymentPin: number, paymentPIN: number) => {
    try {
        if (!await isValidPyamentPIN(userId, oldPaymentPin)) {
            throw new Error('Incorrect Payment PIN.');
        }
        const user = await userRepository.changePaymentPIN(userId, paymentPIN);

        return user;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getBranchUsers = async (branchId: string) => {
    try {
        const user = await userRepository.getBranchUsers(branchId);

        return user;
    } catch (e) {
        throw new Error(e.message);
    }
}