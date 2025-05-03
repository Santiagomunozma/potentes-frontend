import { useQuery } from "@tanstack/react-query";
import { Sell } from "../../../../types/sells";
import { potentesApi } from "../../../../utils/api";

const useGetSell = () => {
  return useQuery<Sell[], Error>({
    queryKey: ["sells"],
    queryFn: async () => {
      const response = await potentesApi.get<Sell[]>("/sells");
      return response.data;
    },
  });
};

export { useGetSell };
