import React from "react";
import SnippetCard from "./SnippetCard";

const SnippetSection = () => {
  const snippetArray = [
    {
      title: "Swap Element in Array",
      description:
        "This Function swaps the element at index i with the element at index j in an array.This Function swaps the element at index i with the element at index j in an array.This Function swaps the element at index i with the element at index j in an array.",
      code: "swap(arr, i, j) {\n\tlet temp = arr[i];\n\tarr[i] = arr[j];\n\tarr[j] = temp;\n}",
      language: "javascript",
      tag: "Array",
    },
    {
      title: "Swap Element in Array",
      description:
        "This Function swaps the element at index i with the element at index j in an array.",
      code: "swap(arr, i, j) {\n\tlet temp = arr[i];\n\tarr[i] = arr[j];\n\tarr[j] = temp;\n}",
      language: "javascript",
      tag: "Array",
    },
    {
      title: "Swap Element in Array",
      description:
        "This Function swaps the element at index i with the element at index j in an array.",
      code: "swap(arr, i, j) {\n\tlet temp = arr[i];\n\tarr[i] = arr[j];\n\tarr[j] = temp;\n}",
      language: "javascript",
      tag: "Array",
    },
    {
      title: "Swap Element in Array",
      description:
        "This Function swaps the element at index i with the element at index j in an array.",
      code: "swap(arr, i, j) {\n\tlet temp = arr[i];\n\tarr[i] = arr[j];\n\tarr[j] = temp;\n}",
      language: "javascript",
      tag: "Array",
    },
    {
      title: "Swap Element in Array",
      description:
        "This Function swaps the element at index i with the element at index j in an array.",
      code: "swap(arr, i, j) {\n\tlet temp = arr[i];\n\tarr[i] = arr[j];\n\tarr[j] = temp;\n}",
      language: "javascript",
      tag: "Array",
    },
    {
      title: "Swap Element in Array",
      description:
        "This Function swaps the element at index i with the element at index j in an array.",
      code: "swap(arr, i, j) {\n\tlet temp = arr[i];\n\tarr[i] = arr[j];\n\tarr[j] = temp;\n}",
      language: "javascript",
      tag: "Array",
    },
    {
      title: "Swap Element in Array",
      description:
        "This Function swaps the element at index i with the element at index j in an array.",
      code: "swap(arr, i, j) {\n\tlet temp = arr[i];\n\tarr[i] = arr[j];\n\tarr[j] = temp;\n}",
      language: "javascript",
      tag: "Array",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-3 gap-5 w-full h-full">
        {snippetArray.map((snippet) => (
          <SnippetCard
            key={snippet.title}
            title={snippet.title}
            description={snippet.description}
            code={snippet.code}
            language={snippet.language}
            tag={snippet.tag}
          />
        ))}
      </div>
    </>
  );
};

export default SnippetSection;
