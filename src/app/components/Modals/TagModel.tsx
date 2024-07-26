"use client";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useParams, useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { ITagModalSchema, tagModalSchema } from "@/schemas/TagModalSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import FormControl from "../FormComponents/FormControl";
import { useTags } from "@/hooks/useTags";
import { useDispatch } from "react-redux";
import { tagModalClose } from "@/redux/features/allModal";

interface ITagModal {
  isOpen: boolean;
  close: () => void;
}

const TagModal = ({ isOpen, close }: ITagModal) => {
  const params = useParams();
  const router = useRouter();
  const {
    createTagsMutate,
    isLoadingCreateTags,
    isErrorCreateTags,
    isSuccessCreateTags,
  } = useTags();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ITagModalSchema>({ resolver: zodResolver(tagModalSchema) });

  const onSubmit: SubmitHandler<ITagModalSchema> = (data) => {
    console.log(data, "data");
    createTagsMutate(data);
    setValue("name", "");
  };

  const clearFormValues = () => {
    router.refresh();
    setValue("name", "");
  };

  return (
    <>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed top-0 bottom-0 right-0 left-0 bg-white dark:bg-opacity-50 bg-opacity-50 dark:bg-neutral-900 z-[200] backdrop-blur-sm `}
      >
        <Dialog
          open={isOpen}
          as="div"
          className="relative z-[201] focus:outline-none "
          onClose={close}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel
                transition
                className="w-full max-w-md rounded-lg border border-neutral-300 dark:border-neutral-800 dark:text-white text-neutral-900 dark:bg-neutral-900 bg-white  backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
                <DialogTitle
                  as="h3"
                  className="text-base/7 flex items-center justify-between font-medium dark:text-white px-3 py-2 border-b dark:border-neutral-800 border-neutral-200"
                >
                  <h3 className="text-lg font-semibold text-neutral-600 ">
                    Add New Tag
                  </h3>
                  <Button
                    className={
                      "dark:text-neutral-400 text-neutral-700 p-1 hover:bg-neutral-100 duration-300 dark:hover:bg-neutral-800 rounded-md"
                    }
                    onClick={close}
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </Button>
                </DialogTitle>
                <div className="flex flex-col gap-1 p-3 dark:text-white text-neutral-900">
                  <form
                    className="flex flex-col gap-5 w-full"
                    action=""
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <FormControl
                      control="input"
                      label="Tag Name"
                      placeholder="Robotics Dreams"
                      error={errors?.name}
                      register={register}
                      name="name"
                      type="text"
                    />
                    <div className="flex justify-end gap-2 items-center w-full">
                      <button
                        disabled={isLoadingCreateTags}
                        onClick={clearFormValues}
                        type="button"
                        className="px-4 py-2 text-xs text-neutral-500 font-medium bg-transparent rounded-md border border-neutral-200 shadow-sm"
                      >
                        Cancel
                      </button>
                      <button
                        disabled={isLoadingCreateTags}
                        type="submit"
                        className={`px-4 py-2 text-xs text-purple-50 font-medium ${
                          isLoadingCreateTags ? "opacity-30" : ""
                        } bg-purple-500 rounded-md`}
                      >
                        Add Tag
                      </button>
                    </div>
                  </form>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default TagModal;
