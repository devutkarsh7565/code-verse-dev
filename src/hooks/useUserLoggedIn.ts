"use client";
import { ILoginSchema } from "@/schemas/loginSchema";
import { LoggedInUserResponse } from "@/types/LoggedInUserTypes";
import { API_ENDPOINT } from "@/types/RegisterUserTypes";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useUserLoggedIn = () => {
  const router = useRouter();
  const {
    mutate: loggedInMutate,
    isError: isErrorLoggedIn,
    isPending: isLoadingLoggedIn,
    isSuccess: isSuccessLoggedIn,
    data: loggedInData,
  } = useMutation({
    mutationKey: ["register"],
    mutationFn: userLoggedIn,
    onSuccess: () => {
      router.push("/all-code-snippets");
      toast.success("Logged in successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const {
    mutate: logoutMutate,
    isPending: isLoadingLogout,
    isSuccess: isSuccessLogout,
    isError: isErrorLogout,
    data: logoutData,
  } = useMutation({
    mutationKey: ["logout"],
    mutationFn: logoutUser,
    onSuccess: () => {
      router.push("/");
      toast.success("Logged out successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return {
    loggedInData,
    loggedInMutate,
    isErrorLoggedIn,
    isLoadingLoggedIn,
    isSuccessLoggedIn,
    logoutData,
    logoutMutate,
    isErrorLogout,
    isLoadingLogout,
    isSuccessLogout,
  };
};

const API_URL = `${API_ENDPOINT}/users/login/`;

const LOGOUT_API_URL = `${API_ENDPOINT}/users/logout/`;

const logoutUser = async () => {
  try {
    const accessToken = JSON.parse(localStorage.getItem("accessToken") || "{}");
    await axios.put(
      LOGOUT_API_URL,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    localStorage.removeItem("accessToken");
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

export const userLoggedIn = async (
  userData: ILoginSchema
): Promise<AxiosResponse<LoggedInUserResponse>> => {
  try {
    const response = await axios.post<LoggedInUserResponse>(API_URL, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { accessToken } = response.data;
    localStorage.setItem("accessToken", JSON.stringify(accessToken));

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
