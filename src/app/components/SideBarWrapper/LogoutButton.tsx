"use client";
import React from "react";
import { useUserLoggedIn } from "@/hooks/useUserLoggedIn";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/16/solid";

const LogoutButton = () => {
  const { isErrorLogout, isLoadingLogout, logoutMutate } = useUserLoggedIn();
  return (
    <button
      disabled={isLoadingLogout}
      onClick={() => logoutMutate()}
      className="flex items-center hover:bg-neutral-200 rounded-lg duration-300 bg-transparent px-4 py-2 gap-2 text-neutral-700 text-sm fixed bottom-4 left-4"
    >
      <ArrowLeftStartOnRectangleIcon className="w-4 h-4 rotate-180" />
      <h2>Log Out</h2>
    </button>
  );
};

export default LogoutButton;
