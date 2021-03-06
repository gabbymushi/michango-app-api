import express from 'express';
import { UserRoutes } from './users/user.routes';
import { OtpRoutes } from './otp/otp.routes';
import { AuthRoutes } from './auth/auth.routes';
import { ConfigRoutes } from './configurations/config.routes';
import { EventRoutes } from './events/event.routes';
import { ContributorRoutes } from './contributors/contributor.routes';

export const initializeRoutes = (app: express.Application) => {
    app.use('/api/v1/users/', UserRoutes);
    app.use('/api/v1/otp/', OtpRoutes);
    app.use('/api/v1/auth/', AuthRoutes);
    app.use('/api/v1/configs/', ConfigRoutes);
    app.use('/api/v1/events/', EventRoutes);
    app.use('/api/v1/contributors/', ContributorRoutes);
}