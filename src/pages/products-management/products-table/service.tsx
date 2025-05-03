import { useQuery } from "@tanstack/react-query";
import { Product } from "../../../types/product";
import { potentesApi } from "../../../utils/api";

const useGetProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await potentesApi.get<Product[]>("/products");
      return response.data;
    },
  });
};

export { useGetProducts };
