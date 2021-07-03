import { Request, RequestHandler, Response } from 'express';
import * as categoryService from './event.service';

export const createCategory = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const category = await categoryService.createCategory(body);

        return res.status(200).json(category);
    } catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const getCategories: RequestHandler = async (req, res) => {
    try {
        const { name } = req.query;
        const categories = await categoryService.getCategories(name as unknown as string ?? '');

        return res.status(200).json(categories);
    } catch (e) {

        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const { categoryId } = req.params;
        const category = await categoryService.deleteCategory(categoryId);

        return res.status(200).json(category);
    } catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const getCategoryById = async (req: Request, res: Response) => {
    try {
        const { categoryId } = req.params;
        const category = await categoryService.getCategoryById(categoryId);

        return res.status(200).json(category);
    } catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const updateCategory = async (req: Request, res: Response) => {
    try {
        const { categoryId } = req.params;
        const { body } = req;
        const category = await categoryService.updateCategory(categoryId, body);

        return res.status(200).json(category);
    } catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

