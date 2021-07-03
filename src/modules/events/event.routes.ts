import express from 'express';
const router = express.Router();
import * as CategoryController from './event.controller';
import { isAuthenticated } from '../auth/auth.controller';

router.post('/', isAuthenticated, CategoryController.createCategory);
router.get('/', CategoryController.getCategories);
router.get('/:categoryId', isAuthenticated, CategoryController.getCategoryById);
router.patch('/:categoryId', isAuthenticated, CategoryController.updateCategory);
router.delete('/:categoryId', isAuthenticated, CategoryController.deleteCategory);

export const CategoryRoutes = router;