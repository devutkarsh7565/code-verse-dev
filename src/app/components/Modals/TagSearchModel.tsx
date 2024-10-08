"use client";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useParams, useRouter } from "next/navigation";

interface ITagModal {
  isOpen: boolean;
  close: () => void;
}

const TagSearchModal = ({ isOpen, close }: ITagModal) => {
  const params = useParams();
  const router = useRouter();

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
                  <div className="flex items-center dark:text-neutral-400 text-neutral-700">
                    <MagnifyingGlassIcon className="w-5 h-5 " />
                    <input
                      className="bg-transparent outline-none border-none focus:ring-0 placeholder:text-sm placeholder:font-normal"
                      type="text"
                      placeholder="Search for members or channels"
                    />
                  </div>
                  <Button
                    className={
                      "dark:text-neutral-400 text-neutral-700 p-1 hover:bg-neutral-100 duration-300 dark:hover:bg-neutral-800 rounded-md"
                    }
                    onClick={close}
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </Button>
                </DialogTitle>
                <div className="flex flex-col gap-1 p-3 dark:text-white text-neutral-900"></div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default TagSearchModal;
