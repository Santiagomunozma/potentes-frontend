import { useQuery } from "@tanstack/react-query";
import { Color } from "../../../types/colors";
import { potentesApi } from "../../../utils/api";
import { Response } from "../../../types/response";
const useGetColors = () => {
  return useQuery<Response<Color[]>, Error>({
    queryKey: ["colors"],
    queryFn: async () => {
      const response = await potentesApi.get<Response<Color[]>>("/colors");
      return response.data;
    },
  });
};

export { useGetColors };
