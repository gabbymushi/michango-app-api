import { seedConfigurations } from '../modules/configurations/config.service';

export const seedInitialData = async () => {
    try {
        seedConfigurations();
    } catch (e) {
        return {
            developerMessage: e.message
        };
    }
}






