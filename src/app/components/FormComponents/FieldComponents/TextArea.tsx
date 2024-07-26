import React from "react";
import { Props } from "./Input";

const TextArea = (props: Props) => {
  const {
    label,
    type,
    register,
    name,
    placeholder,
    error,
    rows,
    style,
    ...rest
  } = props;
  return (
    <>
      <div className="flex flex-col justify-start items-start gap-1 w-full">
        <label
          htmlFor="firstName"
          className="text-xs text-gray-400 font-semibold"
        >
          {label}
        </label>

        <textarea
          rows={rows}
          id={name}
          {...register(name)}
          {...rest}
          placeholder={placeholder}
          className="border text-neutral-800 bg-transparent border-neutral-300 focus:border-neutral-200 rounded-md  py-2 text-sm font-normal px-3 w-full outline-none "
        />
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

export default TextArea;
