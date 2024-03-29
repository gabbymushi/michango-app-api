import { Request, Response } from 'express';
import * as ContributorService from './contributor.service';

export const createContributor = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const contributor = await ContributorService.createContributor(body);

        return res.status(200).json(contributor);
    } catch (e) {
        return res.status(400).json({
            ContributorMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const getContributorsByEventId = async (req: Request, res: Response) => {
    try {
        const eventId = req.params.eventId;

        const contributors = await ContributorService.getContributorsByEventId(eventId);

        return res.status(200).json(contributors);
    } catch (e) {
        return res.status(400).json({
            ContributorMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const getContributor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const Contributor = await ContributorService.getContributor(id);

        return res.status(200).json(Contributor);
    } catch (e) {
        return res.status(400).json({
            ContributorMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const deleteContributor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const Contributor = await ContributorService.deleteContributor(id);

        return res.status(200).json(Contributor);
    } catch (e) {
        return res.status(400).json({
            ContributorMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const updateContributor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const Contributor = await ContributorService.updateContributor(id, body);

        return res.status(200).json(Contributor);
    } catch (e) {
        return res.status(400).json({
            ContributorMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const contribute = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const amount= req.body.amount;
        
        const Contributor = await ContributorService.contribute(id, amount);

        return res.status(200).json(Contributor);
    } catch (e) {
        return res.status(400).json({
            ContributorMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const getContributorByPhoneNumber = async (req: Request, res: Response) => {
    try {
        const { phoneNumber } = req.query;
        const Contributor = await ContributorService.getContributorByPhoneNumber(phoneNumber);

        return res.status(200).json(Contributor);
    } catch (e) {
        return res.status(400).json({
            ContributorMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}


