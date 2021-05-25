import express from 'express';
const router = express.Router();
import * as OTPController from './otp.controller';

router.post('/', OTPController.createOtp);
router.patch('/verify/:phoneNumber', OTPController.verifyOtp);

export const OtpRoutes = router;