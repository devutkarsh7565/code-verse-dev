"use client";
import React, { useState } from "react";
import FormControl from "../FormComponents/FormControl";
import { ILoginSchema, loginSchema } from "@/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ISignupSchema, signupSchema } from "@/schemas/signupSchema";
import { useRegister } from "@/hooks/useRegister";
import { useUserLoggedIn } from "@/hooks/useUserLoggedIn";
import { useRouter } from "next/navigation";

const LoginAndSignup = () => {
  const [isLoginComponent, setIsLoginComponent] = useState<boolean>(true);

  const router = useRouter();
  const {
    registerMutate,
    isErrorRegister,
    isLoadingRegister,
    isSuccessRegister,
    registerData,
  } = useRegister();

  const {
    isErrorLoggedIn,
    isLoadingLoggedIn,
    isSuccessLoggedIn,
    loggedInMutate,
    loggedInData,
  } = useUserLoggedIn();

  const loginForm = useForm<ILoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const signupForm = useForm<ISignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  const onLogin: SubmitHandler<ILoginSchema> = async (data: ILoginSchema) => {
    console.log(data, "login");
    loggedInMutate(data);
  };

  const onSignup: SubmitHandler<ISignupSchema> = async (data) => {
    console.log(data, "signup");
    await registerMutate(data);
  };

  console.log(registerData, "registerData");
  if (isLoginComponent) {
    return (
      <>
        <form
          onSubmit={loginForm.handleSubmit(onLogin)}
          className="h-full w-full flex items-center justify-center"
        >
          <div className="flex flex-col gap-6 w-3/5">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                Welcome Back
              </h2>
              <p className="text-sm text-neutral-400">
                Please enter your details !
              </p>
            </div>
            <button className="w-full p-2 text-neutral-800 flex justify-center text-sm border border-neutral-300 hover:bg-slate-50 duration-300 bg-slate-100 rounded-lg">
              Login with Google
            </button>
            <div className="w-full flex gap-2 items-center">
              <div className="w-[46%] border border-neutral-200"></div>
              <h4>or</h4>
              <div className="w-[46%] border border-neutral-200"></div>
            </div>
            <div className="flex flex-col gap-6 w-full">
              <FormControl
                error={loginForm.formState.errors?.email}
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                control="input"
                register={loginForm.register}
              />

              <div className="w-full flex flex-col gap-3">
                <FormControl
                  error={loginForm.formState.errors?.password}
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter your Password"
                  control="input"
                  register={loginForm.register}
                />
                <div className="flex w-full justify-end">
                  <button className="text-xs text-black font-medium tracking-wide hover:underline duration-300">
                    Forget Password
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="text-sm bg-black border border-black hover:border-black text-white p-2 rounded-lg w-full hover:bg-neutral-800 duration-300 hover:text-neutral-100"
              >
                Log in
              </button>

              <div className="flex items-center w-full justify-center text-sm text-neutral-500">
                Don&t have any account ? {"  "}
                <span
                  onClick={() => setIsLoginComponent(false)}
                  className="text-black ml-1 cursor-pointer hover:underline duration-300"
                >
                  Sign up for free
                </span>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  } else {
    return (
      <>
        <form
          onSubmit={signupForm.handleSubmit(onSignup)}
          className="h-full w-full flex items-center justify-center"
        >
          <div className="flex flex-col gap-6 w-3/5">
            <div className="flex flex-col gap-2 w-full items-center">
              <h2 className="text-3xl font-semibold tracking-wide">
                Create your account
              </h2>
              <p className="text-sm text-neutral-400">
                Let get started with your 30 days free trial
              </p>
            </div>
            <button className="w-full p-2 flex justify-center text-sm border border-neutral-300 hover:bg-slate-50 duration-300 bg-slate-100 rounded-lg">
              Login with Google
            </button>
            <div className="w-full flex gap-2 items-center">
              <div className="w-[46%] border border-neutral-200"></div>
              <h4>or</h4>
              <div className="w-[46%] border border-neutral-200"></div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <FormControl
                register={signupForm.register}
                label="Name"
                error={signupForm.formState.errors?.name}
                placeholder="Enter your name"
                type="text"
                control="input"
                name="name"
              />
              <FormControl
                error={signupForm.formState.errors?.email}
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                control="input"
                register={signupForm.register}
              />

              <div className="w-full flex flex-col gap-3">
                <FormControl
                  error={signupForm.formState.errors?.password}
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter your Password"
                  control="input"
                  register={signupForm.register}
                />
                <div className="flex w-full justify-end">
                  <button className="text-xs text-black font-medium tracking-wide hover:underline duration-300">
                    Forget Password
                  </button>
                </div>
              </div>

              <button
                disabled={isLoadingRegister}
                type="submit"
                className="text-sm bg-black border border-black hover:border-black text-white p-2 rounded-lg w-full hover:bg-neutral-800 duration-300 hover:text-neutral-100"
              >
                Sign Up
              </button>

              <div className="flex items-center w-full justify-center text-sm text-neutral-500">
                Already have any account ? {"  "}
                <span
                  onClick={() => setIsLoginComponent(true)}
                  className="text-green-600 ml-1 cursor-pointer hover:underline duration-300"
                >
                  Sign in
                </span>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
};

export default LoginAndSignup;
