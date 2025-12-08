import api from "@/common/api"
import { AxiosError } from "axios"




export const fetchRecipeById = async (recipeId: string) => {
    try {
        const response = await api.get(`/recipes/${recipeId}`)
        return response.data
    }
    catch (err: unknown)
    {
        if(err instanceof AxiosError)
        {
            throw new Error(err.response?.data.message)
        }
        throw new Error("Failed to fetch recipe")
    }
}