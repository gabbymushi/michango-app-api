import { Request, RequestHandler, Response } from 'express';
import * as eventService from './event.service';

export const createEvent = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const Event = await eventService.createEvent(body);

        return res.status(200).json(Event);
    } catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const getEvents: RequestHandler = async (req, res) => {
    try {
        const { name } = req.query;
        const categories = await eventService.getEvents(name as unknown as string ?? '');

        return res.status(200).json(categories);
    } catch (e) {

        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const deleteEvent = async (req: Request, res: Response) => {
    try {
        const { EventId } = req.params;
        const Event = await eventService.deleteEvent(EventId);

        return res.status(200).json(Event);
    } catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const getEventById = async (req: Request, res: Response) => {
    try {
        const { EventId } = req.params;
        const Event = await eventService.getEventById(EventId);

        return res.status(200).json(Event);
    } catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const updateEvent = async (req: Request, res: Response) => {
    try {
        const { EventId } = req.params;
        const { body } = req;
        const Event = await eventService.updateEvent(EventId, body);

        return res.status(200).json(Event);
    } catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

