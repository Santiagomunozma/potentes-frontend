import { useMutation } from "@tanstack/react-query";
import { potentesApi } from "../../../../utils/api";
import { Coupon } from "../../../../types/coupons";
import { couponFormData } from ".";
const useCreateCoupons = () => {
  return useMutation({
    mutationFn: async (coupon: couponFormData) => {
      const response = await potentesApi.post<Coupon>("/coupons", coupon);
      return response.data;
    },
  });
};

export { useCreateCoupons };
