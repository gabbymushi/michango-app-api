import express from 'express';
const router = express.Router();
import * as UserController from './user.controller';
import { isAuthenticated } from '../auth/auth.controller';
import { getEventsByOwnerId } from '../events/event.controller';

router.get('/phone-number', UserController.getUserByPhoneNumber);
router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUser);
router.get('/:id/events',getEventsByOwnerId);
router.post('/', UserController.createUser);
router.patch('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export const UserRoutes = router;