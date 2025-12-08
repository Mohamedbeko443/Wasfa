import { useQuery } from "@tanstack/react-query"
import { fetchRecipeById } from "../services"
import { Recipe } from "@/common/types/Recipe"




export const useRecipe = (recipeId: string) => {
    const {data: recipe, isLoading, error , refetch} = useQuery<Recipe>({
        queryKey: ['recipe', recipeId],
        queryFn: () => fetchRecipeById(recipeId)
    })

    return {recipe, isLoading, error, refetch}
}