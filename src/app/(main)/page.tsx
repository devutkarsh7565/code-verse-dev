"use client";
import React from "react";
import { DarkMode } from "../components/DarkMode/DarkMode";
import AppIconWrapper from "../components/SideBarWrapper/AppIconWrapper";
import LandingPageImg from "../../../public/landingPageImg.jpg";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  loginComponentOpen,
  signUpComponentOpen,
} from "@/redux/features/signUpAndLogin";
import { useRouter } from "next/navigation";

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div className="flex flex-col w-full h-full p-8">
      <div className="flex items-center justify-between w-full">
        <AppIconWrapper />
        <div className="flex gap-3 items-center">
          <button
            onClick={() => {
              dispatch(loginComponentOpen());
              router.push("/login");
            }}
            className="py-2 px-5 text-xs font-medium text-purple-50 bg-purple-600 rounded-md duration-300 hover:bg-purple-500 hover:text-white"
          >
            Sign In
          </button>
          <button
            onClick={() => {
              dispatch(signUpComponentOpen());
              router.push("/login");
            }}
            className="py-2 px-5 text-xs font-medium border border-purple-500 hover:border-transparent focus:border-purple-600 text-purple-500 bg-purple-50 rounded-md duration-300 hover:bg-purple-600 hover:text-purple-50"
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-center gap-14 mt-20">
        <div className="flex flex-col gap-2 items-center w-1/2 text-center">
          <h1 className="text-3xl font-semibold tracking-wide text-neutral-950">
            Organize Your Code Snippets{" "}
            <span className="text-purple-600">Efficiently!</span>
          </h1>
          <p className="text-sm text-neutral-500">
            With our advanced tagging and search features , you can quickly find
            the snippet you need,right when you need it. Spend less time
            searching for code and more time writing it.
          </p>
        </div>
        <div className="relative w-[54rem] h-[26rem]">
          <Image
            src={LandingPageImg}
            alt="Profile"
            layout="fill"
            className="rounded-lg object-cover border border-purple-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
