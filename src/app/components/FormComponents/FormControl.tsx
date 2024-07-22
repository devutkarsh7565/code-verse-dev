import { FieldError, UseFormRegister } from "react-hook-form";
import FileInput from "./FieldComponents/FileInput";
import Input from "./FieldComponents/Input";
import RadioInput from "./FieldComponents/RadioInput";
import TextArea from "./FieldComponents/TextArea";
import SelectInput from "./FieldComponents/Select";

type Props = {
  control: string;
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  options?: any;
  onChange?: (e: any) => void;
  value?: any;
  accept?: any;
  id?: string;
  multiple?: boolean;
  error: FieldError | undefined;
  register: UseFormRegister<any>;
};

const FormControl = (props: Props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <SelectInput {...rest} />;
    case "radio":
      return <RadioInput {...rest} />;
    case "file":
      return <FileInput {...rest} />;
    case "checkbox":
    case "date":
    default:
      return <></>;
  }
};

export default FormControl;
