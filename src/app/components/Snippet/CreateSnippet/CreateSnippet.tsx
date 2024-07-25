import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

const CreateSnippet = () => {
  const {} = useForm({ resolver: zodResolver() });
  return (
    <div className="bg-white h-screen w-3/5 rounded-md">CreateSnippet</div>
  );
};

export default CreateSnippet;
