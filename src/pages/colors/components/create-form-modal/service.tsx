import { useMutation } from "@tanstack/react-query";
import { colorFormData } from ".";
import { potentesApi } from "../../../../utils/api";
import { Color } from "../../../../types/colors";

const useCreateColors = () => {
  return useMutation({
    mutationFn: async (color: colorFormData) => {
      const response = await potentesApi.post<Color>("/colors", color);
      return response.data;
    },
  });
};

export { useCreateColors };
