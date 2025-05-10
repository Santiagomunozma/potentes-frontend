import { useMutation } from "@tanstack/react-query";
import { potentesApi } from "../../../../utils/api";
import { sizeFormData } from ".";
import { Size } from "../../../../types/sizes";

const useCreateSize = () => {
  return useMutation({
    mutationFn: async (size: sizeFormData) => {
      const response = await potentesApi.post<Size>("/sizes", size);
      return response.data;
    },
  });
};

export { useCreateSize };
