import express from 'express';
const router = express.Router();
import * as AuthController from './auth.controller';
import { isAuthenticated } from '../auth/auth.controller';

router.post('/login', AuthController.login);
router.post('/vendor/login/', AuthController.vendorLogin);
router.post('/change-password', isAuthenticated, AuthController.changePassword);

export const AuthRoutes = router;