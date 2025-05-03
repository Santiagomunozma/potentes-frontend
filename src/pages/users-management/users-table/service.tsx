import { useQuery } from "@tanstack/react-query";
import { User } from "../../../types/users";
import { potentesApi } from "../../../utils/api";

const useGetUsers = () => {
  return useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await potentesApi.get<User[]>("/users");
      return response.data;
    },
  });
};

export { useGetUsers };
