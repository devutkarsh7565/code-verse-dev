"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";

export const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <button onClick={handleDarkMode}>
      {isDarkMode ? (
        <>
          <div className="dark:bg-neutral-800 dark:text-neutral-100 p-1 rounded-md">
            <MoonIcon className="w-5 h-5" />
          </div>
        </>
      ) : (
        <>
          <div className="hover:bg-purple-100 bg-transparent text-purple-500 p-1 rounded-md">
            <SunIcon className="w-5 h-5" />
          </div>
        </>
      )}
    </button>
  );
};
