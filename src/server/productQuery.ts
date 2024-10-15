import { useMutation, useQueryClient } from "react-query";
import { FormData } from "../types";
import axios from "axios";

const URL = "http://localhost:3000";
const PRODUCTS = "products";

export const save = async (product: FormData) =>
  axios.post(`${URL}/${PRODUCTS}`, product);

export const useSave = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newProduct: FormData) => save(newProduct),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PRODUCTS] });
    },
  });
};
