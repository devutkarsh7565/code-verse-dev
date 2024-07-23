"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useDemo = () => {
  const {
    isError,
    isLoading,
    data: demo,
  } = useQuery({ queryKey: ["demo"], queryFn: demoFunction });
  return { isError, isLoading, demo };
};

const demoFunction = async () => {
  const response = await axios.get(
    "https://code-snippet-backend-2wx1.onrender.com/"
  );

  return response.data;
};
