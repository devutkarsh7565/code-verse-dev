import React from "react";
import { Props } from "./Input";

const FileInput = (props: Props) => {
  const { label, name, placeholder, type, ...rest } = props;
  return <div>File</div>;
};

export default FileInput;
