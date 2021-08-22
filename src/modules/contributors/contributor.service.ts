import { IContributor, Contributor } from './contributor.model';
import * as ContributorRepository from './contributor.repository';

export const createContributor = async (body: any) => {
    const session = await Contributor.startSession();
    session.startTransaction();
    try {

        const Contributor = await ContributorRepository.createContributor(body, session);

        await session.commitTransaction();
        session.endSession();

        return Contributor;
    } catch (e) {
        await session.abortTransaction();
        session.endSession();

        throw new Error(e.message);
    }
}

export const createAdmin = async (body: any) => {
    const session = await Contributor.startSession();
    session.startTransaction();

    try {
        const Contributor = await ContributorRepository.createContributor(body, session);

        await session.commitTransaction();
        session.endSession();

        return Contributor;
    } catch (e) {
        await session.abortTransaction();
        session.endSession();

        throw new Error(e.message);
    }
}

export const getContributorsByEventId = (eventId: string) => {
    return ContributorRepository.getContributorsByEventId(eventId);
}

export const getContributor = async (ContributorId: any) => {
    return await ContributorRepository.getContributor(ContributorId);
}

export const deleteContributor = async (ContributorId: string) => {
    return await ContributorRepository.deleteContributor(ContributorId);

}

export const updateContributor = async (ContributorId: string, body: IContributor) => {
    return await ContributorRepository.updateContributor(ContributorId, body);

}

export const getContributorByPhoneNumber = async (phoneNumber: any) => {
    return await ContributorRepository.getContributorByPhoneNumber(phoneNumber);
}

