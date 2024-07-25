"use client";
import { ISignupSchema } from "@/schemas/signupSchema";
import { RegisterUserResponse } from "@/types/RegisterUserTypes";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

export const useRegister = () => {
  const {
    mutate: registerMutate,
    isError: isErrorRegister,
    isPending: isLoadingRegister,
    isSuccess: isSuccessRegister,
    data: registerData,
  } = useMutation({
    mutationKey: ["register"],
    mutationFn: registerUser,
  });
  return {
    registerMutate,
    isErrorRegister,
    isLoadingRegister,
    isSuccessRegister,
    registerData,
  };
};

const API_URL = "http://localhost:4000/api/v1/users/register/";

export const registerUser = async (
  userData: ISignupSchema
): Promise<AxiosResponse<RegisterUserResponse>> => {
  try {
    const response = await axios.post<RegisterUserResponse>(API_URL, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    // Handle error accordingly
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      // You can also handle different error responses based on status codes
    } else {
      console.error("Unexpected error:", error);
    }

    throw error;
  }
};
