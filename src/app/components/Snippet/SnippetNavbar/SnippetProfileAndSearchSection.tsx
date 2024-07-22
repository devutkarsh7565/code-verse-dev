import React from "react";
import { DarkMode } from "../../DarkMode/DarkMode";
import Image from "next/image";
import ProfileImg from "../../../../../public/next.svg";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

const SnippetProfileAndSearchSection = () => {
  return (
    <div className="flex items-center p-2 bg-white rounded-lg justify-between">
      <div className="flex items-center gap-2">
        <div className="relative w-8 h-8">
          <Image
            src={ProfileImg}
            alt="Profile"
            layout="fill"
            className="rounded-full object-cover border border-neutral-200"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm font-medium tracking-wide text-black">
            Utkarsh Tiwari
          </h3>
          <p className="text-xs text-neutral-500 ">utkarshtiwari@gmail.com</p>
        </div>
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
        <button className="p-1 rounded-full bg-purple-500 text-white flex items-center gap-1 text-xs">
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
