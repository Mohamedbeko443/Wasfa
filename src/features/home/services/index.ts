import api from "@/common/api";
import { AxiosError } from "axios";
import { sortByType, sortType, filterType, limit } from "../types";

export interface RecipeParams {
    sortBy: sortByType;
    sortType: sortType;
    filterBy: filterType;
    limit: limit;
}

const defaultParams: RecipeParams = {
    sortBy: "name",
    sortType: "asc",
    filterBy: "all",
    limit: 6
};

export const fetchRecipes = async (params: RecipeParams = defaultParams) => {
    try {
        const response = await api.get(`/recipes?sortBy=${params.sortBy}&sort=${params.sortType}&filter=${params.filterBy}&limit=${params.limit}`);
        return response.data;
    } catch (err: unknown) {
        if (err instanceof AxiosError) {
            console.log(err.response?.data.message);
            throw new Error(err.response?.data.message);
        }
        throw err; 
    }
};