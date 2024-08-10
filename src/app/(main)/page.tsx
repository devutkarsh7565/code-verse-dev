import React from "react";
import { DarkMode } from "../components/DarkMode/DarkMode";
import AppIconWrapper from "../components/SideBarWrapper/AppIconWrapper";

const Home = () => {
  return (
    <div className="flex flex-col w-full h-full p-8">
      <div className="flex items-center justify-between w-full">
        <AppIconWrapper />
        <div className="flex gap-3 items-center">
          <button className="py-2 px-5 text-xs font-medium text-purple-50 bg-purple-600 rounded-md duration-300 hover:bg-purple-500 hover:text-white">
            Sign In
          </button>
          <button className="py-2 px-5 text-xs font-medium border border-purple-500 hover:border-transparent focus:border-purple-600 text-purple-500 bg-purple-50 rounded-md duration-300 hover:bg-purple-600 hover:text-purple-50">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
