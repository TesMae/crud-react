import { useForm } from "react-hook-form";
import FormField from "./FormField";
import { FormData, ProductSchema } from "../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSave } from "../../server/productQuery";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(ProductSchema),
  });

  const mutation = useSave();

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <FormField
          type="text"
          placeholder="Name"
          name="name"
          register={register}
          error={errors.name}
        />
        <FormField
          type="number"
          placeholder="Price"
          name="price"
          register={register}
          error={errors.price}
          valueAsNumber
        />
        <FormField
          type="date"
          placeholder="Expiry Date"
          name="expiryDate"
          register={register}
          error={errors.expiryDate}
        />
        <FormField
          type="email"
          placeholder="Email"
          name="emailSupplier"
          register={register}
          error={errors.emailSupplier}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default Form;
