"use client";
import { ICurrentUser } from "@/types/CurrentUser";
import { API_ENDPOINT } from "@/types/RegisterUserTypes";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

export const useCurrentUser = () => {
  const {
    isError: isErrorCurrentUser,
    isLoading: isLoadingCurrentUser,
    data: currentUser,
  } = useQuery({ queryKey: ["currentUser"], queryFn: getCurrentUser });
  return { isErrorCurrentUser, isLoadingCurrentUser, currentUser };
};

const getCurrentUser = async (): Promise<AxiosResponse<ICurrentUser>> => {
  const accessToken = JSON.parse(localStorage.getItem("accessToken") || "{}");
  const response = await axios.get<ICurrentUser>(
    `${API_ENDPOINT}/users/current-user/`,
    {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response;
};
