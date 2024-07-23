"use client";
import { tagModalClose, tagModalOpen } from "@/redux/features/allModal";
import { RootState } from "@/redux/store";
import { PlusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TagModal from "../../Modals/TagModel";

const TagSection = () => {
  const dispatch = useDispatch();
  const tagModalState = useSelector(
    (state: RootState) => state.allModal.tagModal
  );
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const tagArray = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Filter Function Exercises",
    },
    {
      id: 3,
      name: "API Methods",
    },
    {
      id: 4,
      name: "Javascript Functions",
    },
    {
      id: 5,
      name: "React Js",
    },
    {
      id: 6,
      name: "Reduce Functions",
    },
    {
      id: 7,
      name: "React Hooks",
    },
  ];

  const onClose = () => {
    dispatch(tagModalClose());
  };
  return (
    <>
      <div className="flex items-center p-2 bg-white rounded-lg justify-between w-full">
        <div className="flex gap-3 items-center w-[90%]">
          {tagArray?.map((item, index) => (
            <button
              onClick={() => setSelectedTag(item?.name)}
              key={index}
              className={`p-2 rounded-md ${
                selectedTag === item?.name
                  ? "bg-purple-500 text-white"
                  : "text-neutral-500"
              }  flex items-center gap-1 text-xs`}
            >
              <p className="text-xs  font-medium tracking-wide">{item?.name}</p>
            </button>
          ))}
        </div>
        <button
          onClick={() => dispatch(tagModalOpen())}
          className="p-2 rounded-md bg-purple-500 duration-300 hover:text-white hover:bg-purple-600 text-purple-50 flex items-center gap-1 text-xs"
        >
          <PlusIcon className="w-4 cursor-pointer h-4 " />
          <p className="text-xs  font-medium tracking-wide">Tag</p>
        </button>
      </div>
      <TagModal isOpen={tagModalState} close={onClose} />
    </>
  );
};

export default TagSection;
