import { FieldError, UseFormRegister } from "react-hook-form";
import { FormData, FormFieldNames } from "../../types";

type FormFieldProps = {
  type: string;
  placeholder: string;
  name: FormFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

const FormField = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}: FormFieldProps) => (
  <>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
    />
    {error && <span> {error.message} </span>}
  </>
);

export default FormField;
