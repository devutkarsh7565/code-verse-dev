import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const AppIconWrapper = () => {
  return (
    <>
      <Link href={"/"}>
        <div className="flex gap-2 w-full items-center">
          <div className="p-1 rounded-md bg-purple-500 text-white">
            <CodeBracketIcon className="w-6 h-6" />
          </div>
          <h1 className="text-lg font-medium tracking-wide text-neutral-500">
            <span className="text-purple-500">Codeverse.</span>Dev
          </h1>
        </div>
      </Link>
    </>
  );
};

export default AppIconWrapper;
