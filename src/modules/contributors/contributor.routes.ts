import express from 'express';
const router = express.Router();
import * as ContributorController from './contributor.controller';
import { isAuthenticated } from '../auth/auth.controller';

router.get('/phone-number', ContributorController.getContributorByPhoneNumber);
//router.get('/', ContributorController.getContributors);
router.get('/:id', ContributorController.getContributor);
router.post('/', ContributorController.createContributor);
router.patch('/:id/contribute', ContributorController.contribute);
router.patch('/:id', ContributorController.updateContributor);
router.delete('/:id', ContributorController.deleteContributor);

export const ContributorRoutes = router;