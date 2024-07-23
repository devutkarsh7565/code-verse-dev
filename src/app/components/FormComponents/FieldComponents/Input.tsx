import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export type Props = {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  error: FieldError | undefined;
  register: UseFormRegister<any>;
  selectOptions?: {
    name: string;
    value: string;
  }[];
};

const Input = (props: Props) => {
  const { label, name, placeholder, type, register, error, ...rest } = props;
  return (
    <div className="flex flex-col justify-start items-start gap-1 w-full">
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
        className="border bg-transparent border-neutral-300 focus:border-neutral-200 rounded-md  py-2 text-sm font-normal px-3 w-full outline-none "
      />
      {error && <p className="text-red-500 text-sm">{error?.message}</p>}
    </div>
  );
};

export default Input;
