import api from "@/common/api";
import { isAxiosError } from "axios";


type recipeDto = {
    name: string;
    description: string;
    ingredients: string[];
    instructions: string[];
    level: string;
    cookTime: number;
    servings: number
    premium: boolean;
    image: File;
}

//create recipe 
export const createRecipe = async (recipe: recipeDto) => {
    try {
        const formData = new FormData();
        formData.append('name', recipe.name);
        formData.append('description', recipe.description);
        formData.append('ingredients', recipe.ingredients.join(','));
        formData.append('instructions', recipe.instructions.join(','));
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