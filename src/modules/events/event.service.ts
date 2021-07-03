import * as categoryRepository from './event.repositroy';
import { ICategory } from './event.model';

export const createCategory = async (body: ICategory) => {
    try {
        const category = await categoryRepository.createCategory(body);

        return category;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getCategories = async (name: string) => {
    try {
        const categories = await categoryRepository.getCategories(name);

        return categories;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getCategoryById = async (categoryId: string) => {
    try {
        const category = await categoryRepository.getCategoryById(categoryId);

        return category;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const updateCategory = async (categoryId: string, body: ICategory) => {
    try {
        const category = await categoryRepository.updateCategory(categoryId, body);

        return category;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const deleteCategory = async (categoryId: string) => {
    try {
        const category = await categoryRepository.deleteCategory(categoryId);

        return category;
    } catch (e) {
        throw new Error(e.message);
    }
}

