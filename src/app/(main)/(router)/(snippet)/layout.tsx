import SnippetNavbar from "@/app/components/Snippet/SnippetNavbar/SnippetNavbar";
import React from "react";

const SnippetLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col gap-5 w-full h-full px-5 py-4">
        <SnippetNavbar />
        <div>{children}</div>
      </div>
    </>
  );
};

export default SnippetLayout;
