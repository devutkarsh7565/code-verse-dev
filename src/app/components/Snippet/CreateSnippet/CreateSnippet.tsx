import { ISnippetSchema, snippetSchema } from "@/schemas/snippetSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FormControl from "../../FormComponents/FormControl";
import {
  XMarkIcon,
  DocumentChartBarIcon,
  DocumentDuplicateIcon,
  CodeBracketIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { addSnippetContainerClose } from "@/redux/features/addSnippet";
import { useTags } from "@/hooks/useTags";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { useCodeSnippet } from "@/hooks/useCodeSnippet";

const CreateSnippet = () => {
  const {
    tagsByCurrentUserId,
    isLoadingTagsByCurrentUserId,
    isErrorTagsByCurrentUserId,
  } = useTags();

  const { createCodeSnippetMutate, isLoadingCreateCodeSnippet } =
    useCodeSnippet();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ISnippetSchema>({
    resolver: zodResolver(snippetSchema),
    defaultValues: {
      language: "javascript",
      code: "",
      title: "",
      description: "",
      tags: [tagsByCurrentUserId?.data?.tags?.[0]?.name],
    },
  });

  const dispatch = useDispatch();

  const language = watch("language");

  console.log(
    watch("tags"),
    "tags",

    watch("title"),
    "title",
    watch("description"),
    "description",
    watch("language"),
    "language"
  );

  console.log(watch("code"), "code");

  const onSubmit: SubmitHandler<ISnippetSchema> = (data: ISnippetSchema) => {
    console.log(data, "data code snippet create");
    createCodeSnippetMutate(data);
  };
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
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
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

        <div className="flex -mt-4  gap-3">
          <TagIcon className="w-6 mt-2 h-6 text-neutral-400" />
          <FormControl
            control="multiSelect"
            error={errors.tags?.[0]}
            placeholder="Tags..."
            name="tags"
            register={register}
            style="primary"
            selectOptions={tagsByCurrentUserId?.data?.tags?.map((item) => {
              return { name: item.name, value: item.name };
            })}
            setValue={setValue}
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

        <div className="flex gap-3 h-full">
          <CodeBracketIcon className="w-6 mt-2 h-6 text-neutral-400" />
          <div className="flex flex-col w-full gap-1">
            <div className="flex h-full flex-col gap-2 w-full border border-neutral-300 rounded-md p-3">
              <div className="flex justify-between w-full items-center">
                <FormControl
                  control="select"
                  error={errors.language}
                  placeholder="Select Language"
                  name="language"
                  register={register}
                  style="primary"
                  selectOptions={[
                    { name: "JavaScript", value: "JavaScript" },
                    { name: "Python", value: "Python" },
                    { name: "C++", value: "C++" },
                    { name: "Java", value: "Java" },
                    { name: "C#", value: "C#" },
                  ]}
                />
                <DocumentDuplicateIcon className="w-5 h-5 text-neutral-400" />
              </div>
              <div className="flex flex-col w-full">
                <CodeEditor
                  {...register("code")}
                  data-color-mode="light"
                  value={watch("code")}
                  language="js"
                  placeholder="Please enter your Code."
                  onChange={(evn) => setValue("code", evn.target.value)}
                  padding={15}
                  style={{
                    fontSize: 20,
                    backgroundColor: "white",
                    overflowY: "scroll",
                    fontFamily:
                      "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                  }}
                  className="w-full h-[25rem]  rounded-xl mb-3"
                />
              </div>
            </div>
            <div className="w-full">
              {errors.code && (
                <p className="text-red-500 text-xs font-medium tracking-wide">
                  {errors?.code?.message}
                </p>
              )}

              {!errors?.code && <p className="h-3"></p>}
            </div>
          </div>
        </div>

        <div className="flex w-full justify-end p-3">
          <button
            type="submit"
            disabled={isLoadingCreateCodeSnippet}
            className="px-3 py-2 font-medium tracking-wide text-sm bg-purple-500 text-purple-50 hover:bg-white border hover:border-purple-500 hover:text-purple-500 focus:border-purple-500 duration-300 rounded-lg"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateSnippet;
