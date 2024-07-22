"use client";
import FormControl from "@/app/components/FormComponents/FormControl";
import SnippetNotFound from "@/app/components/Snippet/SnippetSection/SnippetNotFound";
import SnippetSection from "@/app/components/Snippet/SnippetSection/SnippetSection";
import { DemoSchema, IDemoSchema } from "@/schemas/demoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const AllCodeSnippet = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDemoSchema>({ resolver: zodResolver(DemoSchema) });

  const onSubmit: SubmitHandler<IDemoSchema> = (data) => {
    console.log(data, "data");
  };
  return (
    <div className="w-full h-full">
      {/* <form onSubmit={handleSubmit(onSubmit)} className="form">
        <FormControl
          control="input"
          label="Name"
          name="name"
          type="text"
          placeholder="Name"
          error={errors?.name}
          register={register}
        />

        <FormControl
          control="input"
          label="Email"
          name="email"
          type="email"
          placeholder="Email"
          error={errors?.email}
          register={register}
        />

        <button type="submit">submit!</button>
      </form> */}
      {/* <SnippetSection /> */}
      <SnippetNotFound />
    </div>
  );
};

export default AllCodeSnippet;
