import { Request, Response } from 'express';
import * as userService from './user.service';

export const createUser = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const user = await userService.createUser(body);

        return res.status(200).json(user);
    } catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const user = await userService.getUsers();

        return res.status(200).json(user);
    } catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const getUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await userService.getUser(id);

        return res.status(200).json(user);
    } catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await userService.deleteUser(id);

        return res.status(200).json(user);
    } catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const user = await userService.updateUser(id, body);

        return res.status(200).json(user);
    } catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const getUserByPhoneNumber = async (req: Request, res: Response) => {
    try {
        const { phoneNumber } = req.query;
        const user = await userService.getUserByPhoneNumber(phoneNumber);

        return res.status(200).json(user);
    } catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const verifyNIDA = async (req: Request, res: Response) => {
    try {
        const { nin } = req.body;

        return res.status(200).json();
    } catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const sendNIDAQuestion = async (req: Request, res: Response) => {
    try {
        const { nin, rqCode, answer } = req.body;

        return res.status(200).json();
    } catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const changePaymentPIN = async (req: any, res: Response) => {
    try {
        const { oldPaymentPin, paymentPin } = req.body;
        const { _id } = req.authUser;
        await userService.changePaymentPIN(_id, oldPaymentPin, paymentPin);

        return res.status(200).json({
            userMessage: 'Payment PIN successfully changed.'
        });
    } catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
}

export const getBranchUsers = async (req: Request, res: Response) => {
    try {
        const { branchId } = req.params;

        const user = await userService.getBranchUsers(branchId);

        return res.status(200).json(user);
    } catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const validatePaymentPin = async (req: any, res: Response) => {
    try {
        const { paymentPin } = req.body;
        const { _id } = req.authUser;
        const isValid = await userService.isValidPyamentPIN(_id, paymentPin);

        if (isValid) {
            return res.status(200).json({
                status: true,
                userMessage: 'Payment PIN is valid.'
            });
        } else {
            return res.status(401).json({
                status: false,
                userMessage: 'Payment PIN is invalid.'
            });
        }
    } catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
}
