interface IConstants {
    APP_NAME: any,
    PORT: any,
    NODE_ENV: any,
    DATABASE_URL: any,
    OTP_EXPIRATION_TIME: any,
    SMS_URL: any,
    SMS_SENDER_ID: any,
    JWT_SECRET: any,
    AUTHORIZATION_SCHEME: any,
    SMS_API_ID: any,
    SMS_API_PASSWORD: any,
    PERPAGE: any
}

export const constants: IConstants = {

    /** Application PORT from .env */
    APP_NAME: process.env.APP_NAME || 'overdraft',

    /** Application PORT from .env */
    PORT: process.env.PORT || 3000,

    /** Application environment from .env */
    NODE_ENV: process.env.NODE_ENV,

    /** Database url from .env*/
    DATABASE_URL: process.env.DB_DATABASE,

    /**Otp expiration time from .env */
    OTP_EXPIRATION_TIME: process.env.OTP_EXPIRATION_TIME || 10,

    /**Otp expiration time from .env */
    SMS_URL: process.env.SMS_URL,

    /**Otp expiration time from .env */
    SMS_SENDER_ID: process.env.SMS_SENDER_ID,

    /**Otp expiration time from .env */
    SMS_API_ID: process.env.SMS_API_ID,

    /**Otp expiration time from .env */
    SMS_API_PASSWORD: process.env.SMS_API_PASSWORD,

    /**Otp expiration time from .env */
    JWT_SECRET: 'kakakuona',

    /**authorization scheme for jwt */
    AUTHORIZATION_SCHEME: 'Bearer',

    /** callback url for updating payment */
    PERPAGE: process.env.PERPAGE as unknown as number || 15
}