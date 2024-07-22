import React from "react";
import SnippetProfileAndSearchSection from "./SnippetProfileAndSearchSection";
import TagSection from "./TagSection";

const SnippetNavbar = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <SnippetProfileAndSearchSection />
      <TagSection />
    </div>
  );
};

export default SnippetNavbar;
