import { z, ZodType } from "zod";

export type FormData = {
  name: string;
  price: number;
  expiryDate: string;
  emailSupplier: string;
};

export type FormFieldNames = "name" | "price" | "expiryDate" | "emailSupplier";

export const ProductSchema: ZodType<FormData> = z.object({
  name: z.string().min(3),
  price: z.number().min(1).max(1000),
  expiryDate: z
    .string()
    .refine(
      (date) => new Date(date) > new Date(),
      "Expiry Date must be superior than current date",
    ),
  emailSupplier: z.string().email(),
});
