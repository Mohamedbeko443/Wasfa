import api from "@/common/api";
import { AxiosError } from "axios"



export type userFilters = {
   search?: string;
   role?: roleType;
   status?: statusType;
}

export type statusType = "active" | "banned" | "verified" | "unverified" | "";
export type roleType = "admin" | "user" | "";

// get all users 
export const getAllUsers = async (filters: userFilters = {}) => {
   try {
      const response = await api.get(`/users?search=${filters.search}&role=${filters.role}&status=${filters.status}`)
      return response.data;
   } catch (error: unknown) {
      if (error instanceof AxiosError) {
         throw error.response?.data
      }
      throw error
   }
}