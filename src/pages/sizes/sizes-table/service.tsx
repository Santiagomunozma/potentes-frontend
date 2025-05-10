import { useQuery } from "@tanstack/react-query";
import { potentesApi } from "../../../utils/api";
import { Size } from "../../../types/sizes";

const useGetSizes = () => {
  return useQuery<Size[], Error>({
    queryKey: ["sizes"],
    queryFn: () => potentesApi.get("/sizes"),
  });
};

export { useGetSizes };
