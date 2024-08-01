"use client";
import { ISnippetSchema } from "@/schemas/snippetSchema";
import { CodeSnippet, ICodeSnippet } from "@/types/CodeSnippet";
import { API_ENDPOINT } from "@/types/RegisterUserTypes";
import { useMutation, useQuery } from "@tanstack/react-query";
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

  const {
    isError: isErrorCreateCodeSnippet,
    isPending: isLoadingCreateCodeSnippet,
    mutate: createCodeSnippetMutate,
    isSuccess: isSuccessCreateCodeSnippet,
  } = useMutation({
    mutationKey: ["create-code-snippet"],
    mutationFn: createCodeSnippet,

    onSuccess: () => {},
  });
  return {
    isErrorCodeSnippetByCurrentUserId,
    isLoadingCodeSnippetByCurrentUserId,
    codeSnippetByCurrentUserId,
    isErrorCreateCodeSnippet,
    isLoadingCreateCodeSnippet,
    createCodeSnippetMutate,
    isSuccessCreateCodeSnippet,
  };
};

const createCodeSnippet = async (
  data: ISnippetSchema
): Promise<AxiosResponse<CodeSnippet>> => {
  const accessToken = JSON.parse(localStorage.getItem("accessToken") || "{}");
  const response = await axios.post<CodeSnippet>(
    `${API_ENDPOINT}/code-snippets/create`,
    data,
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

// const createTags = async (
//   data: ICreateRequestBody
// ): Promise<AxiosResponse<ITags>> => {
//   const accessToken = JSON.parse(localStorage.getItem("accessToken") || "{}");
//   const response = await axios.post<ITags>(
//     `${API_ENDPOINT}/tags/create`,
//     data,
//     {
//       withCredentials: true,
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   return response;
// };
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
