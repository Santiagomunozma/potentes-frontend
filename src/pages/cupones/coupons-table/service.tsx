import { useQuery } from "@tanstack/react-query";
import { Coupon } from "../../../types/coupons";
import { potentesApi } from "../../../utils/api";
import { Response } from "../../../types/response";

const useGetCoupons = () => {
  return useQuery<Response<Coupon[]>, Error>({
    queryKey: ["coupons"],
    queryFn: async () => {
      const response = await potentesApi.get<Response<Coupon[]>>("/coupons");
      return response.data;
    },
  });
};

export { useGetCoupons };
