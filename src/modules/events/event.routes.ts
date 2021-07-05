import express from 'express';
const router = express.Router();
import * as EventController from './event.controller';
import { isAuthenticated } from '../auth/auth.controller';

router.post('/', EventController.createEvent);
router.get('/', EventController.getEvents);
router.get('/:eventId', EventController.getEventById);
router.patch('/:eventId', EventController.updateEvent);
router.delete('/:eventId', EventController.deleteEvent);

export const EventRoutes = router;