"use client";
import { ICodeSnippet } from "@/types/CodeSnippet";
import { API_ENDPOINT } from "@/types/RegisterUserTypes";
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
  AxiosResponse<ICodeSnippet>
> => {
  const accessToken = JSON.parse(localStorage.getItem("accessToken") || "{}");
  const response = await axios.get<ICodeSnippet>(
    `${API_ENDPOINT}/code-snippets`,
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
