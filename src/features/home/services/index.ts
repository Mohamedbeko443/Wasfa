import api from "@/common/api";
import { AxiosError } from "axios";
import { sortByType, sortType, filterType, limit } from "../types";

export interface RecipeDefaults {
    sortBy: sortByType;
    sortType: sortType;
    filterBy: filterType;
    limit: limit;
    ingredients: string[];
    page: number;
}

const defaultParams: RecipeDefaults = {
    sortBy: "name",
    sortType: "asc",
    filterBy: "all",
    limit: 6,
    ingredients: [],
    page: 1
};

export const fetchRecipes = async (params: RecipeDefaults = defaultParams) => {
    params.ingredients = params.ingredients || [];
    params.page = params.page || 1;
    console.log(params.page);
    try {
        const response = await api.get(`/recipes?sortBy=${params.sortBy}&sort=${params.sortType}&filter=${params.filterBy}&limit=${params.limit}&ingredients=${params.ingredients?.join(',')}&page=${params.page}`);
        return response.data;
    } catch (err: unknown) {
        if (err instanceof AxiosError) {
            console.log(err.response?.data.message);
            throw new Error(err.response?.data.message);
        }
        throw err; 
    }
};