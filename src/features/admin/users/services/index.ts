import api from "@/common/api";
import { AxiosError } from "axios"



export type userFilters = {
   search?: string;
   role?: roleType;
   status?: statusType;
   page?: number;
}

export type statusType = "active" | "banned" | "verified" | "unverified" | "";
export type roleType = "admin" | "user" | "";

// get all users 
export const getAllUsers = async (filters: userFilters = {}) => {
   try {
      const response = await api.get(`/users?search=${filters.search}&role=${filters.role}&status=${filters.status}&page=${filters.page || 1}`)
      return response.data;
   } catch (error: unknown) {
      if (error instanceof AxiosError) {
         throw error.response?.data
      }
      throw error
   }
}



// delete user 
export const deleteUser = async (id: string) => {
   try {
      const response = await api.delete(`/profile/${id}`)
      return response.data;
   } catch (error: unknown) {
      console.log(error)
      if (error instanceof AxiosError) {
         throw error.response?.data
      }
      throw error
   }
}