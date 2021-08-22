import { ClientSession } from 'mongoose';
import { IContributor, Contributor } from './contributor.model';

export const createContributor = async (body: IContributor, session: ClientSession) => {
    try {
        const contributor = (await Contributor.create([body], { session }))[0];

        return contributor;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getContributorsByEventId = (event: string) => {
    return Contributor.find({ event });
}

export const getContributor = async (ContributorId: string) => {
    try {
        const contributor = await Contributor.findOne({ _id: ContributorId });

        return contributor;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const deleteContributor = async (id: string) => {
    try {
        const contributor = await Contributor.findOneAndDelete({ _id: id });

        return contributor;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const updateContributor = async (id: string, body: IContributor) => {
    try {
        const contributor = await Contributor.findOneAndUpdate({ _id: id }, { ...body }, { new: true });

        return contributor;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getContributorByPhoneNumber = async (phoneNumber: any) => {
    try {
        const contributor = await Contributor.findOne({ phoneNumber });

        return contributor;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getEventContributors = async (eventId: string) => {
    try {
        const contributors = await Contributor.find({ event: eventId });

        return contributors;
    } catch (e) {
        throw new Error(e.message);
    }
}