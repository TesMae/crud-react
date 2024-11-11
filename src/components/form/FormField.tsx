import { FieldError, UseFormRegister } from "react-hook-form";
import { FormData, FormFieldNames } from "../../types";

type FormFieldProps = {
  type: string;
  placeholder: string;
  name: FormFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
  step?: number | string;
};

const FormField = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
  step,
}: FormFieldProps) => (
  <>
    <input
      type={type}
      placeholder={placeholder}
      step={step}
      {...register(name, { valueAsNumber })}
    />
    {error && <span> {error.message} </span>}
  </>
);

export default FormField;
