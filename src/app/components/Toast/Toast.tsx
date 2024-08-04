"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { toast, Toaster, ToastBar } from "react-hot-toast";

const CustomToaster = () => (
  <Toaster>
    {(t) => (
      <ToastBar toast={t}>
        {({ icon, message }) => (
          <>
            {icon}
            {message}
            {t.type !== "loading" && (
              <button
                className="text-neutral-500 border border-neutral-300 rounded-full p-1 bg-neutral-100 hover:bg-neutral-50 duration-300"
                onClick={() => toast.dismiss(t.id)}
              >
                <XMarkIcon className="w-4 h-4" />
              </button>
            )}
          </>
        )}
      </ToastBar>
    )}
  </Toaster>
);

export default CustomToaster;
