"use client";
import React from "react";
import { Props } from "./Input";
import { Select } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const MultiSelectInput = (props: Props) => {
  const { register, name, selectOptions, label, error, setValue } = props;
  const [selected, setSelected] = React.useState<string[]>([
    selectOptions?.[0]?.name as string,
  ]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const addOptions = (tagName: string) => {
    if (selected.includes(tagName)) {
      const newSelected = selected.filter((item) => item !== tagName);
      setSelected(newSelected);
      if (setValue) {
        setValue(name, newSelected);
      }
      return;
    }

    const newSelected = [...selected, tagName];
    setSelected(newSelected);
    if (setValue) {
      setValue(name, newSelected);
    }
  };

  const removeSelectedOption = (tagName: string) => {
    const newSelected = selected.filter((item) => item !== tagName);
    setSelected(newSelected);
    if (setValue) {
      setValue(name, newSelected);
    }
  };
  return (
    <>
      <div className="flex flex-col justify-start items-start gap-1 z-50 w-full">
        <label htmlFor="firstName" className="text-sm text-gray-400">
          {label}
        </label>
        <div
          onClick={handleOpen}
          {...register(name)}
          className={`bg-white border border-neutral-300 flex gap-2 items-center text-black outline-none cursor-pointer dark:bg-neutral-800 px-3 py-2 rounded-md w-full`}
          aria-label="Project status"
        >
          {selected?.map((item, index) => (
            <div
              className="flex gap-1 text-neutral-800 items-center px-2 text-xs font-semibold tracking-wide py-1 rounded-full bg-neutral-200"
              key={index}
            >
              <h3> {item}</h3>
              <button
                type="button"
                onClick={() => removeSelectedOption(item)}
                className="p-[3px] rounded-full border border-neutral-500 text-neutral-500"
              >
                <XMarkIcon className="w-2 h-2" />
              </button>
            </div>
          ))}
        </div>
        {open && (
          <div className="flex z-[100] flex-col w-full rounded-md bg-white border border-neutral-300">
            {open &&
              selectOptions?.map((option) => (
                <div
                  onClick={() => addOptions(option.name)}
                  className={`${
                    selected?.includes(option.name) ? "bg-neutral-100 " : ""
                  } hover:bg-neutral-100 border-b flex gap-2 items-center border-neutral-300 duration-300 text-black cursor-pointer dark:bg-neutral-800 px-3 py-2 w-full`}
                  key={option.value}
                >
                  {selected?.includes(option.name) ? (
                    <CheckCircleIcon className="w-5 h-5 text-purple-500" />
                  ) : (
                    <div className="w-4 h-4 border border-neutral-300 rounded"></div>
                  )}
                  {option.name}
                </div>
              ))}
          </div>
        )}
        {error && (
          <p className="text-red-500 text-xs font-medium tracking-wide">
            {error?.message}
          </p>
        )}

        {!error && <p className="h-3"></p>}
      </div>
    </>
  );
};

export default MultiSelectInput;
