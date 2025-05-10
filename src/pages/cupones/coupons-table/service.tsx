import { useQuery } from "@tanstack/react-query";
import { Coupon } from "../../../types/coupons";
import { potentesApi } from "../../../utils/api";

const useGetCoupons = () => {
  return useQuery<Coupon[], Error>({
    queryKey: ["coupons"],
    queryFn: async () => {
      const response = await potentesApi.get<Coupon[]>("/coupons");
      return response.data;
    },
  });
};

export { useGetCoupons };
