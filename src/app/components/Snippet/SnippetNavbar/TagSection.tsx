"use client";
import { tagModalClose, tagModalOpen } from "@/redux/features/allModal";
import { RootState } from "@/redux/store";
import { PlusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TagModal from "../../Modals/TagModel";
import { useTags } from "@/hooks/useTags";

const TagSection = () => {
  const dispatch = useDispatch();
  const tagModalState = useSelector(
    (state: RootState) => state.allModal.tagModal
  );
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const {
    isErrorTagsByCurrentUserId,
    isLoadingTagsByCurrentUserId,
    tagsByCurrentUserId,
  } = useTags();

  const tags =
    tagsByCurrentUserId?.data?.tags?.map((tag) => ({
      id: tag._id,
      name: tag.name,
    })) || [];

  const tagArray: { id: string; name: string }[] = [
    {
      id: "1",
      name: "All",
    },
    ...tags,
  ];

  const onClose = () => {
    dispatch(tagModalClose());
  };
  return (
    <>
      <div className="flex items-center p-2 bg-white rounded-lg justify-between w-full">
        <div className="flex gap-3 items-center w-[90%]">
          {tagArray?.map((item, index) =>
            isLoadingTagsByCurrentUserId ? (
              <>
                <div className="flex gap-3 items-center">
                  <h1 className="h-7 w-10 rounded-md bg-neutral-200 animate-pulse"></h1>
                  <h1 className="h-7 w-10 rounded-md bg-neutral-200 animate-pulse"></h1>
                  <h1 className="h-7 w-10 rounded-md bg-neutral-200 animate-pulse"></h1>
                  <h1 className="h-7 w-10 rounded-md bg-neutral-200 animate-pulse"></h1>
                  <h1 className="h-7 w-10 rounded-md bg-neutral-200 animate-pulse"></h1>
                  <h1 className="h-7 w-10 rounded-md bg-neutral-200 animate-pulse"></h1>
                </div>
              </>
            ) : (
              <button
                onClick={() => setSelectedTag(item?.name)}
                key={index}
                className={`p-2 rounded-md ${
                  selectedTag === item?.name
                    ? "bg-purple-500 text-white"
                    : "text-neutral-500"
                }  flex items-center gap-1 text-xs`}
              >
                <p className="text-xs  font-medium tracking-wide">
                  {item?.name}
                </p>
              </button>
            )
          )}
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
