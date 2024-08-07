"use client";
import LoginAndSignup from "@/app/components/LoginAndSignup/LoginAndSignup";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();
  const { currentUser, isLoadingCurrentUser } = useCurrentUser();
  if (currentUser && currentUser?.data) {
    router.push("/all-code-snippets");
  }
  return (
    <>
      <LoginAndSignup />
    </>
  );
};

export default Login;
