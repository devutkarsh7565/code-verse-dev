"use client";
import React from "react";
import SnippetCard, { SnippetCardSkeleton } from "./SnippetCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useCodeSnippet } from "@/hooks/useCodeSnippet";
import { useDebouncing } from "@/hooks/useDebouncing";
import SnippetNotFound from "./SnippetNotFound";

const SnippetSection = () => {
  const addSnippetState = useSelector(
    (state: RootState) => state.addSnippet.addSnippet
  );

  const search = useSelector(
    (state: RootState) => state.searchSnippet.searchSnippet
  );

  const filterSnippetByTagId = useSelector(
    (state: RootState) => state.searchSnippet.filterSnippetByTag
  );

  const searchDebounce = useDebouncing(search, 500);

  const {
    isErrorCodeSnippetByCurrentUserId,
    isLoadingCodeSnippetByCurrentUserId,
    codeSnippetByCurrentUserId,
  } = useCodeSnippet(searchDebounce, filterSnippetByTagId);

  console.log(codeSnippetByCurrentUserId, "code snippet");

  if (isLoadingCodeSnippetByCurrentUserId) {
    return (
      <div className="grid grid-cols-3 w-full gap-5 h-full">
        <SnippetCardSkeleton />
        <SnippetCardSkeleton />
        <SnippetCardSkeleton />
      </div>
    );
  }
  if (isErrorCodeSnippetByCurrentUserId) {
    return (
      <>
        <SnippetNotFound />
      </>
    );
  }
  return (
    <>
      <div
        className={`grid ${
          addSnippetState ? "grid-cols-1 w-1/2" : "grid-cols-3 w-full"
        }  gap-5  h-full`}
      >
        {codeSnippetByCurrentUserId?.data?.codeSnippetsWithTags?.map(
          (snippet) => (
            <SnippetCard
              key={snippet.title}
              title={snippet.title}
              description={snippet.description}
              code={snippet.code}
              language={snippet.language}
              tags={snippet.tags}
              id={snippet._id}
            />
          )
        )}
      </div>
    </>
  );
};

export default SnippetSection;
