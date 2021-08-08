import { Request, Response, NextFunction } from 'express';
import * as authService from './auth.service';

export const login = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        
        const user = await authService.login(body);
        
        return res.status(user.status).json(user);
    } catch (e) {
        console.log(e.message)
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
}

export const isAuthenticated = (req: any, res: Response, next: NextFunction) => {
    try {
        const { authorization, } = req.headers;
        const user = authService.isAuthenticated(authorization);
        req.authUser = user;

        next();
    } catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
}

export const changePassword = async (req: any, res: Response) => {
    try {
        const { password, oldPassword } = req.body;
        const { phoneNumber } = req.authUser.user;

        const auth = await authService.changePassword(password, oldPassword, phoneNumber);

        return res.status(auth.status).json({
            userMessage: auth.userMessage,
            developerMessage: auth.userMessage
        });
    } catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
}