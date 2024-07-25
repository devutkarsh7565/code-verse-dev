"use client";
import FormControl from "@/app/components/FormComponents/FormControl";
import CreateSnippet from "@/app/components/Snippet/CreateSnippet/CreateSnippet";
import SnippetNotFound from "@/app/components/Snippet/SnippetSection/SnippetNotFound";
import SnippetSection from "@/app/components/Snippet/SnippetSection/SnippetSection";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useDemo } from "@/hooks/useDemo";
import { RootState } from "@/redux/store";
import { DemoSchema, IDemoSchema } from "@/schemas/demoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const AllCodeSnippet = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<IDemoSchema>({ resolver: zodResolver(DemoSchema) });

  // const onSubmit: SubmitHandler<IDemoSchema> = (data) => {
  //   console.log(data, "data");
  // };

  const { currentUser, isErrorCurrentUser, isLoadingCurrentUser } =
    useCurrentUser();

  console.log(currentUser, "currentUser");

  const addSnippetState = useSelector(
    (state: RootState) => state.addSnippet.addSnippet
  );

  return (
    <div className="w-full h-full flex gap-4">
      {/* <h3>{demo?.app}</h3> */}
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
      <SnippetSection />
      {addSnippetState && <CreateSnippet />}

      {/* <SnippetNotFound /> */}
    </div>
  );
};

export default AllCodeSnippet;
