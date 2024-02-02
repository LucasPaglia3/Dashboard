import { getAllTrabajos } from "@/services/apiTrabajos";
import { useQuery } from "@tanstack/react-query";

export const useTrabajos = () => {
  const { data: trabajos, isPending: isLoading } = useQuery({
    queryKey: ["trabajos"],
    queryFn: getAllTrabajos,
  });

  return { trabajos, isLoading };
};
