import { useQuery } from "@tanstack/react-query";
import { Color } from "../../../types/colors";
import { potentesApi } from "../../../utils/api";

const useGetColors = () => {
  return useQuery<Color[], Error>({
    queryKey: ["colors"],
    queryFn: async () => {
      const response = await potentesApi.get<Color[]>("/colors");
      return response.data;
    },
  });
};

export { useGetColors };
