"use client";
import { queryClient } from "@/Provider/ReactQueryProvider";
import { addSnippetContainerClose } from "@/redux/features/addSnippet";
import { ISnippetSchema } from "@/schemas/snippetSchema";
import {
  CodeSnippet,
  ICodeSnippet,
  ICodeSnippetDelete,
} from "@/types/CodeSnippet";
import { API_ENDPOINT } from "@/types/RegisterUserTypes";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export const useCodeSnippet = () => {
  const dispatch = useDispatch();
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
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ["code-snippet"],
      });
    },
    onSuccess: () => {
      dispatch(addSnippetContainerClose());
      toast.success("Snippet created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const {
    isError: isErrorDeleteCodeSnippet,
    isPending: isLoadingDeleteCodeSnippet,
    mutate: deleteCodeSnippetMutate,
    isSuccess: isSuccessDeleteCodeSnippet,
  } = useMutation({
    mutationKey: ["delete-code-snippet"],
    mutationFn: deleteCodeSnippet,
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ["code-snippet"],
      });
    },
    onSuccess: () => {
      toast.success("Snippet deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return {
    isErrorCodeSnippetByCurrentUserId,
    isLoadingCodeSnippetByCurrentUserId,
    codeSnippetByCurrentUserId,
    isErrorCreateCodeSnippet,
    isLoadingCreateCodeSnippet,
    createCodeSnippetMutate,
    isSuccessCreateCodeSnippet,
    isErrorDeleteCodeSnippet,
    isLoadingDeleteCodeSnippet,
    deleteCodeSnippetMutate,
    isSuccessDeleteCodeSnippet,
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

const deleteCodeSnippet = async (
  id: string
): Promise<AxiosResponse<ICodeSnippetDelete>> => {
  const accessToken = JSON.parse(localStorage.getItem("accessToken") || "{}");
  const response = await axios.delete<ICodeSnippetDelete>(
    `${API_ENDPOINT}/code-snippets/${id}`,

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
