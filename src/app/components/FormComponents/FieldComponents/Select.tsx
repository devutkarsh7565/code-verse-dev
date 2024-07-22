import React from "react";
import { Props } from "./Input";
import { Select } from "@headlessui/react";

const SelectInput = (props: Props) => {
  const { register, name, selectOptions, label } = props;
  return (
    <>
      <div className="flex flex-col justify-start items-start gap-1">
        <label htmlFor="firstName" className="text-sm text-gray-400">
          {label}
        </label>
        <Select
          {...register(name)}
          className={`bg-neutral-100 outline-none cursor-pointer dark:bg-neutral-800 px-3 py-2 rounded-md w-full`}
          aria-label="Project status"
        >
          {selectOptions?.map((option) => (
            <option
              className={`bg-neutral-100 cursor-pointer dark:bg-neutral-800 px-3 py-2 w-full`}
              key={option.value}
              value={option.value}
            >
              {option.name}
            </option>
          ))}
        </Select>
      </div>
    </>
  );
};

export default SelectInput;
