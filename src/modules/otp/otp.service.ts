import { IOtp } from './otp.model';
import * as otpRepository from './otp.repository';
import { generateOTP } from '../../utils'
import { constants } from '../../config/constants';
//import { sendSMS } from '../../services/sms.service'

export const createOtp = async (body: IOtp) => {
    try {
        const { phoneNumber } = body;
        const otp = generateOTP();
        const otpInfo = { phoneNumber, otp }
        const message = `Your one time PIN is ${otp}, it will expire in ${constants.OTP_EXPIRATION_TIME} minutes.`
        await otpRepository.deleteOtp(phoneNumber);
        const createdOtp = await otpRepository.createOtp(otpInfo);
        //await sendSMS(phoneNumber, message);

        return createdOtp;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const verifyOtp = async (body: IOtp) => {
    try {
        const availableOTP = await otpRepository.getOTP(body);

        if (availableOTP !== null && hasOTPExpired(availableOTP.createdAt)) {
            throw new Error("OTP has expired. Resend OTP.");
        };
        const otp = await otpRepository.verifyOtp(body);
        return otp;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const hasOTPExpired = (createdAt: any) => {
    try {
        let hasExpired: boolean = false;

        const now = new Date(Date.now());
        createdAt = new Date(createdAt);

        const diff = (now.getTime() - createdAt.getTime()) / 1000 / 60;
        const minutes = Math.abs(Math.round(diff));

        if (minutes > parseInt(constants.OTP_EXPIRATION_TIME)) {
            hasExpired = true;
        }
        
        return hasExpired;
    } catch (e) {
        throw new Error(e.message);
    }
}
