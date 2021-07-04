import express from 'express';
const router = express.Router();
import * as UserController from './contributor.controller';
import { isAuthenticated } from '../auth/auth.controller';

router.get('/phone-number', UserController.getUserByPhoneNumber);
router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUser);
router.post('/', UserController.createUser);
router.post('/validate-pin', isAuthenticated, UserController.validatePaymentPin);
router.patch('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);
router.post('/change-payment-pin', isAuthenticated, UserController.changePaymentPIN);

export const UserRoutes = router;