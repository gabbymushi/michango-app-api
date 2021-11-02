import { IEvent, Event } from './event.model';

export const createEvent = async (body: IEvent) => {
    try {
        const event = await Event.create(body);

        return event;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getEvents = async (keyword: string) => {
    try {
        const search = new RegExp('.*' + keyword + '.*', 'i');

        const events = await Event.find({ name: { $regex: search } });

        return events;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getEventsByOwnerId = async (ownerId: string) => {
    try {
        const events = await Event.find({ owners: ownerId })
            .sort({ createdAt: -1 });

        return events;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getEventById = async (EventId: string) => {
    try {
        const event = await Event.findOne({ _id: EventId });

        return event;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const updateEvent = async (EventId: string, body: IEvent) => {
    try {
        const event = await Event.findOneAndUpdate({ _id: EventId }, { ...body }, { new: true });

        return event;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const deleteEvent = async (EventId: string) => {
    try {
        const event = await Event.deleteOne({ _id: EventId });

        return Event;
    } catch (e) {
        throw new Error(e.message);
    }
}

