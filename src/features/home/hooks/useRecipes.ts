import { useQuery } from "@tanstack/react-query"
import { fetchRecipes, RecipeDefaults } from "../services"
import { Recipe } from "@/common/types/Recipe"


interface IRecipes {
    recipes: Recipe[];
    total: number;
    totalPages: number;
    page: number;
    limit: number;
}


export const useRecipes = (params?: RecipeDefaults) => {

    const { data, isPending, isError , isLoading , refetch  } = useQuery<IRecipes>({
        queryKey: ['recipes', params],
        queryFn: () => fetchRecipes(params)
    })


    return { data, isPending, isError , isLoading , refetch }

}