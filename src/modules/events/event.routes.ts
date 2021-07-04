import express from 'express';
const router = express.Router();
import * as EventController from './event.controller';
import { isAuthenticated } from '../auth/auth.controller';

router.post('/', EventController.createEvent);
router.get('/', EventController.getEvents);
router.get('/:eventId', isAuthenticated, EventController.getEventById);
router.patch('/:eventId', isAuthenticated, EventController.updateEvent);
router.delete('/:eventId', isAuthenticated, EventController.deleteEvent);

export const EventRoutes = router;