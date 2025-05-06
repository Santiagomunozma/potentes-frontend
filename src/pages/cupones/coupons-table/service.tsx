import { useQuery } from "@tanstack/react-query";
import { Coupon } from "../../../types/coupons";
import { potentesApi } from "../../../utils/api";

const useGetCoupons = () => {
  return useQuery<Coupon[], Error>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await potentesApi.get<Coupon[]>("/products");
      return response.data;
    },
  });
};

export { useGetCoupons };
