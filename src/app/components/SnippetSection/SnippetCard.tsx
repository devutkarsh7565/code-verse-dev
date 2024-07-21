"use client";
import { TrashIcon } from "@heroicons/react/16/solid";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface ISnippetCard {
  title: string;
  description: string;
  code: string;
  language: string;
  tag: string;
}

const SnippetCard = ({
  code,
  description,
  language,
  tag,
  title,
}: ISnippetCard) => {
  return (
    <div className=" rounded-md h-[30rem] flex flex-col gap-3 bg-white py-5 ">
      <div className="flex items-center justify-between px-3">
        <h1 className="text-lg font-medium tracking-wide">{title}</h1>
        <BookmarkIcon className="w-5 h-5 text-neutral-500" />
      </div>
      <div className=" px-3">
        <p className="mb-3 text-sm text-neutral-500">Jun 6</p>
        <button className="py-2 px-4 rounded-md text-xs font-medium text-purple-500 bg-purple-50">
          {tag}
        </button>
      </div>
      <p className="text-sm px-3 text-neutral-500 line-clamp-3 h-16">
        {description}
      </p>
      <SyntaxHighlighter
        customStyle={{
          height: "50%",
          padding: "12px",
        }}
        language={language}
        style={docco}
      >
        {code}
      </SyntaxHighlighter>
      <div className="flex items-center justify-between px-3">
        <h3 className=" text-neutral-500">{language}</h3>
        <TrashIcon className="w-5 h-5 text-neutral-400" />
      </div>
    </div>
  );
};

export default SnippetCard;
