import { useMutation, useQuery, useQueryClient } from "react-query";
import { FormData, Product } from "../types";
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

export const fetch = async () => {
  const result = await axios.get(`${URL}/${PRODUCTS}`);
  return result.data;
};

export const useProducts = () =>
  useQuery<Product[]>({
    queryKey: [PRODUCTS],
    queryFn: fetch,
  });

const remove = async (id: string) => {
  await axios.delete(`${URL}/${PRODUCTS}/${id}`);
};

export const useRemove = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PRODUCTS] });
    },
  });
};

export const update = async (product: Product) =>
  axios.put(`${URL}/${PRODUCTS}/${product.id}`, product);

export const useUpdate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (product: Product) => update(product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PRODUCTS] });
    },
  });
};
