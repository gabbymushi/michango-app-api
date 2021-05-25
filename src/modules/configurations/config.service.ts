import * as configRepository from "./config.repository";
import { IConfig, ICONFIG } from "./config.model";

export async function seedConfigurations() {
    try {
        const CONFIG: Array<ICONFIG> = [
            { module: 'loan', name: 'loanServiceCharge', displayName: 'Loan service charge in %', type: 'percentage' }
        ];

        await addConfig(CONFIG);
    } catch (e) {
        return {
            developerMessage: e.message
        };
    }
}

export async function addConfig(body: Array<ICONFIG>) {
    try {
        body.forEach(async config => {
            const count = await configRepository.checkConfig({ module: config.module, name: config.name });
            if (count === 0) {
                const status = await configRepository.addConfig(config);
            }

        })

        return true;
    } catch (e) {
        throw new Error(e.message);
    }
}

export async function getConfigs() {
    try {
        const configs = await configRepository.getConfigs();
        return configs;
    } catch (e) {
        throw new Error(e.message);
    }
}

export async function getConfigValue(name: string) {
    try {
        const config = await configRepository.getConfigValue(name);
        
        if (config && typeof config.value !== undefined) {
            return config.value;
        } else {
            throw new Error("Configuration is not found");
        }
    } catch (e) {
        throw new Error(e.message);
    }
}

export async function setConfig(body: Array<IConfig>) {
    try {
        body.forEach(async config => {
            await configRepository.setConfig(config);
        })

        return true;
    } catch (e) {
        throw new Error(e.message);
    }
}
