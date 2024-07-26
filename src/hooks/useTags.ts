"use client";
import { API_ENDPOINT } from "@/types/RegisterUserTypes";
import { ITags } from "@/types/Tag";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

export const useTags = () => {
  const {
    isError: isErrorTagsByCurrentUserId,
    isLoading: isLoadingTagsByCurrentUserId,
    data: tagsByCurrentUserId,
  } = useQuery({ queryKey: ["tags"], queryFn: getTagsByCurrentUserId });
  return {
    isErrorTagsByCurrentUserId,
    isLoadingTagsByCurrentUserId,
    tagsByCurrentUserId,
  };
};

const getTagsByCurrentUserId = async (): Promise<AxiosResponse<ITags>> => {
  const accessToken = JSON.parse(localStorage.getItem("accessToken") || "{}");
  const response = await axios.get<ITags>(`${API_ENDPOINT}/tags`, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return response;
};
