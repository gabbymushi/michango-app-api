import * as eventRepository from './event.repositroy';
import { IEvent } from './event.model';

export const createEvent = async (body: IEvent) => {
    return await eventRepository.createEvent(body);
}

export const getEvents = async (name: string) => {
    try {
        const categories = await eventRepository.getEvents(name);

        return categories;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getEventById = async (EventId: string) => {
    try {
        const Event = await eventRepository.getEventById(EventId);

        return Event;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const updateEvent = async (EventId: string, body: IEvent) => {
    try {
        const Event = await eventRepository.updateEvent(EventId, body);

        return Event;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const deleteEvent = async (EventId: string) => {
    try {
        const Event = await eventRepository.deleteEvent(EventId);

        return Event;
    } catch (e) {
        throw new Error(e.message);
    }
}

