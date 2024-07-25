"use client";
import { ICurrentUser } from "@/types/CurrentUser";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

export const useCurrentUser = () => {
  const {
    isError: isErrorCurrentUser,
    isLoading: isLoadingCurrentUser,
    data: currentUser,
  } = useQuery({ queryKey: ["demo"], queryFn: getCurrentUser });
  return { isErrorCurrentUser, isLoadingCurrentUser, currentUser };
};

const getCurrentUser = async (): Promise<AxiosResponse<ICurrentUser>> => {
  const accessToken = JSON.parse(localStorage.getItem("accessToken") || "{}");
  const response = await axios.get<ICurrentUser>(
    "http://localhost:4000/api/v1/users/current-user/",
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
