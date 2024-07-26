import React from "react";
import {
  FieldError,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

export type Props = {
  label?: string;
  name: string;
  placeholder: string;
  type?: string;
  error: FieldError | undefined;
  register: UseFormRegister<any>;
  setValue?: UseFormSetValue<FieldValues>;
  selectOptions?: {
    name: string;
    value: string;
  }[];
  style?: "primary" | "secondary";
  rows?: number;
};

const Input = (props: Props) => {
  const { label, name, placeholder, type, register, error, style, ...rest } =
    props;
  return (
    <div className="flex flex-col justify-start items-start gap-1  w-full">
      <label
        htmlFor="firstName"
        className="text-xs text-gray-400 font-semibold"
      >
        {label}
      </label>

      <input
        type={type}
        id={name}
        {...register(name)}
        {...rest}
        placeholder={placeholder}
        className="border bg-transparent text-neutral-800 border-neutral-300 focus:border-neutral-200 rounded-md  py-2 text-sm font-normal px-3 w-full outline-none "
      />
      {error && (
        <p className="text-red-500 text-xs font-medium tracking-wide">
          {error?.message}
        </p>
      )}

      {!error && <p className="h-3"></p>}
    </div>
  );
};

export default Input;
