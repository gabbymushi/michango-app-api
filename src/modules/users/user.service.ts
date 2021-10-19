import { formatPhoneNumber } from '../../utils';
import { IUser, User } from './user.model';
import * as userRepository from './user.repository';

export const createUser = async (body: any) => {
    const session = await User.startSession();
    session.startTransaction();
    try {
        body.phoneNumber = formatPhoneNumber(body.phoneNumber);

        if (await getUserByPhoneNumber(body.phoneNumber)) {
            throw new Error('You already have an account, please use your phone number to login or choose forgot password to recover your password.');
        }

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

export const createAdmin = async (body: any) => {
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

export const getUsers = async () => {
    return await userRepository.getUsers();
}

export const getUser = async (userId: any) => {
    return await userRepository.getUser(userId);
}

export const deleteUser = async (userId: string) => {
    return await userRepository.deleteUser(userId);

}

export const updateUser = async (userId: string, body: IUser) => {
    return await userRepository.updateUser(userId, body);

}

export const getUserByPhoneNumber = async (phoneNumber: any) => {
    return await userRepository.getUserByPhoneNumber(phoneNumber);
}

export const isValidPyamentPIN = async (userId: string, paymentPIN: number) => {
    const count = await userRepository.checkPaymentPIN(userId, paymentPIN);

    return (count > 0 ? true : false);
}

export const changePaymentPIN = async (userId: string, oldPaymentPin: number, paymentPIN: number) => {
    if (!await isValidPyamentPIN(userId, oldPaymentPin)) {
        throw new Error('Incorrect Payment PIN.');
    }

    return await userRepository.changePaymentPIN(userId, paymentPIN);
}
