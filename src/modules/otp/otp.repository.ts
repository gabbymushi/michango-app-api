import { IOtp, OTP } from './otp.model';

export const createOtp = async (body: object) => {
    try {
        const otp = await OTP.create(body);

        return otp;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const deleteOtp = async (phoneNumber: any) => {
    try {
        const otp = await OTP.deleteOne({phoneNumber});

        return otp;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const verifyOtp = async (body: IOtp) => {
    try {
        const { phoneNumber, otp } = body;
        const verifiedOTP = await OTP.findOneAndUpdate({ phoneNumber, otp }, { verifiedAt: Date.now() });

        return verifiedOTP;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getOTP = async (body: IOtp) => {
    try {
        const { phoneNumber, otp } = body;
        const availableOTP = await OTP.findOne({ phoneNumber, otp });

        return availableOTP;
    } catch (e) {
        throw new Error(e.message);
    }
}
