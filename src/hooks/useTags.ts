"use client";
import { queryClient } from "@/Provider/ReactQueryProvider";
import { tagModalClose } from "@/redux/features/allModal";
import { API_ENDPOINT } from "@/types/RegisterUserTypes";
import { ICreateRequestBody, ITags } from "@/types/Tag";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";

export const useTags = () => {
  const dispatch = useDispatch();
  const {
    isError: isErrorTagsByCurrentUserId,
    isLoading: isLoadingTagsByCurrentUserId,
    data: tagsByCurrentUserId,
  } = useQuery({ queryKey: ["tags"], queryFn: getTagsByCurrentUserId });

  const {
    isError: isErrorCreateTags,
    isPending: isLoadingCreateTags,
    mutate: createTagsMutate,
    isSuccess: isSuccessCreateTags,
  } = useMutation({
    mutationKey: ["create-tags"],
    mutationFn: createTags,
    onSettled: async () => {
      return await queryClient.invalidateQueries({ queryKey: ["tags"] });
    },

    onSuccess: () => {
      dispatch(tagModalClose());
    },
  });
  return {
    isErrorTagsByCurrentUserId,
    isLoadingTagsByCurrentUserId,
    tagsByCurrentUserId,
    isErrorCreateTags,
    isLoadingCreateTags,
    createTagsMutate,
    isSuccessCreateTags,
  };
};

const createTags = async (
  data: ICreateRequestBody
): Promise<AxiosResponse<ITags>> => {
  const accessToken = JSON.parse(localStorage.getItem("accessToken") || "{}");
  const response = await axios.post<ITags>(
    `${API_ENDPOINT}/tags/create`,
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
