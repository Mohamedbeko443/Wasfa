import api from "@/common/api";
import { isAxiosError } from "axios";


type recipeDto = {
    name: string;
    description: string;
    ingredients: string[] | string;
    instructions: string[] | string;
    level: string;
    cookTime: number;
    servings: number
    premium: boolean;
    image: File;
}


export const createRecipe = async (recipe: recipeDto) => {
    try {
        const formData = new FormData();
        formData.append('name', recipe.name);
        formData.append('description', recipe.description);
        formData.append('ingredients', typeof recipe.ingredients === 'string' ? recipe.ingredients : recipe.ingredients.join(','));
        formData.append('instructions', typeof recipe.instructions === 'string' ? recipe.instructions : recipe.instructions.join(','));
        formData.append('level', recipe.level);
        formData.append('cookTime', recipe.cookTime.toString());
        formData.append('servings', recipe.servings.toString());
        formData.append('premium', recipe.premium.toString());
        formData.append('image', recipe.image);

        const response = await api.post('/recipes', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return response.data;
    } catch (error) {
        if (isAxiosError(error)) {
            throw error.response?.data;
        }
        throw error;
    }
};




export const deleteRecipe = async (id: string) => {
    try {
        const response = await api.delete(`/recipes/${id}`);
        return response.data;
    } catch (error) {
        if (isAxiosError(error)) {
            throw error.response?.data;
        }
        throw error;
    }
};


export const updateRecipeImage = async ({ id, image }: {id: string, image: File}) => {
    try {
        const formData = new FormData();
        formData.append('image', image);

        const response = await api.put(`/recipes/upload-image/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return response.data;
    } catch (error) {
        if (isAxiosError(error)) {
            throw error.response?.data;
        }
        throw error;
    }
};




export const updateRecipe = async ({ id, recipe }: { id: string, recipe: Omit<recipeDto, 'image'> }) => {
    try {
        const response = await api.put(`/recipes/${id}`, recipe);
        return response.data;
    } catch (error) {
        if (isAxiosError(error)) {
            throw error.response?.data;
        }
        throw error;
    }
};
