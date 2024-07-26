"use client";
import { API_ENDPOINT } from "@/types/RegisterUserTypes";
import { ITags } from "@/types/Tag";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

export const useCodeSnippet = () => {
  const {
    isError: isErrorCodeSnippetByCurrentUserId,
    isLoading: isLoadingCodeSnippetByCurrentUserId,
    data: codeSnippetByCurrentUserId,
  } = useQuery({
    queryKey: ["code-snippet"],
    queryFn: getCodeSnippetByCurrentUserId,
  });
  return {
    isErrorCodeSnippetByCurrentUserId,
    isLoadingCodeSnippetByCurrentUserId,
    codeSnippetByCurrentUserId,
  };
};

const getCodeSnippetByCurrentUserId = async (): Promise<
  AxiosResponse<ITags>
> => {
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
