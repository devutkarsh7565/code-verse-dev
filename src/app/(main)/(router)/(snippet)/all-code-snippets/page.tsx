"use client";
import FormControl from "@/app/components/FormComponents/FormControl";
import SnippetNotFound from "@/app/components/Snippet/SnippetSection/SnippetNotFound";
import SnippetSection from "@/app/components/Snippet/SnippetSection/SnippetSection";
import { useDemo } from "@/hooks/useDemo";
import { DemoSchema, IDemoSchema } from "@/schemas/demoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const AllCodeSnippet = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<IDemoSchema>({ resolver: zodResolver(DemoSchema) });

  // const onSubmit: SubmitHandler<IDemoSchema> = (data) => {
  //   console.log(data, "data");
  // };

  const { demo, isError, isLoading } = useDemo();
  console.log(demo, "demo");
  return (
    <div className="w-full h-full">
      <h3>{demo?.app}</h3>
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
      {/* <SnippetNotFound /> */}
    </div>
  );
};

export default AllCodeSnippet;
