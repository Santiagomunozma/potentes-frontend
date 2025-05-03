import { useMutation } from "@tanstack/react-query";
import { Product } from "../../../../types/product";
import { ProductFormData } from ".";
import { potentesApi } from "../../../../utils/api";

const useCreateProduct = () => {
  return useMutation({
    mutationFn: async (product: ProductFormData) => {
      const response = await potentesApi.post<Product>("/products", product);
      return response.data;
    },
  });
};

export { useCreateProduct };
