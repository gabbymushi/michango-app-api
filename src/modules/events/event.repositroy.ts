import { ICategory, Category } from './event.model';

export const createCategory = async (body: ICategory) => {
    try {
        const category = await Category.create(body);

        return category;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getCategories = async (keyword: string) => {
    try {
        const search = new RegExp('.*' + keyword + '.*', 'i');

        const categories = await Category.find({ name: { $regex: search } });

        return categories;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getCategoryById = async (categoryId: string) => {
    try {
        const category = await Category.findOne({ _id: categoryId });

        return category;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const updateCategory = async (categoryId: string, body: ICategory) => {
    try {
        const category = await Category.findOneAndUpdate({ _id: categoryId }, { ...body }, { new: true });

        return category;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const deleteCategory = async (categoryId: string) => {
    try {
        const category = await Category.deleteOne({ _id: categoryId });

        return category;
    } catch (e) {
        throw new Error(e.message);
    }
}

