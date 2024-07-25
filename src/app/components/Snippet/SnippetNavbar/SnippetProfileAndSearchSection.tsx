"use client";
import React from "react";
import { DarkMode } from "../../DarkMode/DarkMode";
import Image from "next/image";
import ProfileImg from "../../../../../public/next.svg";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useDispatch } from "react-redux";
import { addSnippetContainerOpen } from "@/redux/features/addSnippet";

const SnippetProfileAndSearchSection = () => {
  const { currentUser, isErrorCurrentUser, isLoadingCurrentUser } =
    useCurrentUser();

  const dispatch = useDispatch();
  return (
    <div className="flex items-center p-2 bg-white rounded-lg justify-between">
      <div className="flex items-center gap-2">
        {isLoadingCurrentUser ? (
          <div className="w-8 h-8 rounded-full bg-neutral-300 animate-pulse"></div>
        ) : (
          <div className="relative w-8 h-8">
            <Image
              src={ProfileImg}
              alt="Profile"
              layout="fill"
              className="rounded-full object-cover border border-neutral-200"
            />
          </div>
        )}

        {isLoadingCurrentUser ? (
          <div className="flex flex-col gap-1">
            <h3 className="text-sm h-5 rounded-full w-24 animate-pulse font-medium tracking-wide bg-neutral-300"></h3>
            <h3 className="text-sm h-3 rounded-full w-36 animate-pulse font-medium tracking-wide bg-neutral-300"></h3>
          </div>
        ) : (
          <div className="flex flex-col">
            <h3 className="text-sm font-medium tracking-wide text-black">
              {currentUser?.data?.user?.name}
            </h3>
            <p className="text-xs text-neutral-500 ">
              {currentUser?.data?.user?.email}
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between rounded-full p-1 bg-slate-100 w-1/2">
        <div className="flex items-center gap-2 pl-2">
          <MagnifyingGlassIcon className="w-5 h-5 text-purple-500" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent outline-none text-sm"
          />
        </div>
        <button
          onClick={() => dispatch(addSnippetContainerOpen())}
          className="p-1 rounded-full bg-purple-500 text-white flex items-center gap-1 text-xs"
        >
          <PlusIcon className="w-4 h-4" />
          <h3>Add Snippet</h3>
        </button>
      </div>
      <div className="flex gap-4 items-center">
        <Bars3Icon className="w-6 cursor-pointer h-6 text-neutral-600" />
        <DarkMode />
      </div>
    </div>
  );
};

export default SnippetProfileAndSearchSection;
