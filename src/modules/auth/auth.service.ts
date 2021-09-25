import { getUserByPhoneNumber, getVendorUserByPhoneNumber } from '../users/user.repository';
import { USER_TYPES } from '../users/user.model';
import jwt from 'jsonwebtoken';
import { constants } from '../../config/constants';
import { formatPhoneNumber } from '../../utils';

export const login = async (body: any) => {
    try {
        let token = null;
        let response;

        const { phoneNumber, password } = body;

        const user = await getUserByPhoneNumber(formatPhoneNumber(phoneNumber));

        if (user && user.comparePassword(password) && user.type === USER_TYPES.USER) {
            const authUser = user.toJSON();
            token = jwt.sign({ ...authUser }, constants.JWT_SECRET);
            response = { user, token, status: 200 };
        } else {
            response = { userMessage: 'Wrong username or password.', user: {}, token, status: 401 };
        }

        return response;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const isAuthenticated = (authorization: any) => {
    if (typeof authorization === undefined) {
        throw new Error('Authorization scheme not specified');
    }

    const tokenInfo = authorization.split(" ");

    if (tokenInfo[0] !== constants.AUTHORIZATION_SCHEME) {
        throw new Error('Incorrect authorization scheme.')
    }

    const token = tokenInfo[1];
    const user = jwt.verify(token, constants.JWT_SECRET);
    return user;
}

export const changePassword = async (password: string, oldPassword: string, phoneNumber: string) => {
    try {
        let response;

        const user = await getUserByPhoneNumber(phoneNumber);
        if (user && user.comparePassword(oldPassword)) {
            await user.changePassword(password);
            response = { userMessage: 'Password changed successfully.', status: 200 };
        } else {
            response = { userMessage: 'Old password is wrong.', status: 401 };
        }

        return response;
    } catch (e) {
        throw new Error(e.message);
    }
}