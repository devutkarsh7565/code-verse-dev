import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

const SnippetNotFound = () => {
  return (
    <>
      <div className="w-full h-full pt-28 flex flex-col justify-center items-center text-lg text-neutral-500">
        <MagnifyingGlassIcon className="w-32 h-32 animate-pulse" />
        <h3>Snippets Not Found</h3>
      </div>
    </>
  );
};

export default SnippetNotFound;
