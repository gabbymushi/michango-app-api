import { IConfig, ICONFIG, Config } from "./config.model";

export async function addConfig(body: ICONFIG) {
    try {
        const createdConfig = await Config.create(body);

        return createdConfig;
    } catch (e) {
        throw new Error(e.message);
    }
}

export async function setConfig(body: IConfig) {
    try {
        const { name, value } = body;
        const updatedConfig = await Config.updateOne({ name }, { value });

        return updatedConfig;
    } catch (e) {
        throw new Error(e.message);
    }
}

export async function getConfigs() {
    try {
        const configs = await Config.find({});
        /* .skip(offset)
        .limit(perPage)
        .sort({ createdAt: -1 }); */
        return configs;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function getConfigValue(name: string) {
    try {
        const config = await Config.findOne({ name });
        return config;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function checkConfig(config: object) {
    try {
        const count = await Config.countDocuments({ ...config });
        return count;
    } catch (error) {
        throw new Error(error.message);
    }
}


