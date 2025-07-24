import { apiClient } from "@/shared/api/base";
import { SignUpRequest, User } from "../model/types";

export const signUp = async (data: SignUpRequest): Promise<User> => {
  const response = await apiClient.post("/auth/signup", data);
  return response.data;
};