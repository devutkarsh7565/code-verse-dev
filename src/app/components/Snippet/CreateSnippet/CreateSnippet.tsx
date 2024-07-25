import { ISnippetSchema, snippetSchema } from "@/schemas/snippetSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FormControl from "../../FormComponents/FormControl";
import { XMarkIcon, DocumentChartBarIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { addSnippetContainerClose } from "@/redux/features/addSnippet";
// import { DocumentChartBarIcon } from "@heroicons/react/16/solid";

const CreateSnippet = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISnippetSchema>({ resolver: zodResolver(snippetSchema) });

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<ISnippetSchema> = (data: ISnippetSchema) => {};
  return (
    <div className="bg-white min-h-screen w-3/5 rounded-md p-4 flex flex-col gap-5 ">
      <div className="flex items-center w-full justify-between">
        <h2 className="text-2xl font-semibold text-neutral-500 uppercase">
          Create Snippet
        </h2>
        <button
          type="button"
          onClick={() => dispatch(addSnippetContainerClose())}
          className="hover:bg-neutral-100 hover:rounded-md duration-300 p-1"
        >
          <XMarkIcon className="w-5 h-5 text-neutral-400" />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex  gap-3">
          <h3 className="text-4xl mt-1 font-medium text-purple-500">T</h3>
          <FormControl
            control="input"
            error={errors.title}
            placeholder="New Title"
            name="title"
            register={register}
            style="primary"
            type="text"
          />
        </div>
        <div className="flex  gap-3">
          <DocumentChartBarIcon className="w-6 mt-2 h-6 text-neutral-400" />
          <FormControl
            control="textarea"
            error={errors.description}
            placeholder="New Description..."
            name="description"
            register={register}
            style="primary"
            rows={4}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateSnippet;
