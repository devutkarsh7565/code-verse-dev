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
    <div className="flex flex-col justify-start items-start gap-1">
      <label htmlFor="firstName" className="text-sm text-gray-400">
        {label}
      </label>

      <input
        type={type}
        id={name}
        {...register(name)}
        {...rest}
        placeholder={placeholder}
        className="border-2 bg-transparent border-slate-500/20 rounded-lg mobileMd:py-2 py-1 text-lg mobileLg:text-xl font-normal px-2 w-[17rem] mobileMd:w-[350px] outline-none "
      />
      {error && <p className="text-red-500 text-sm">{error?.message}</p>}
    </div>
  );
};

export default Input;
