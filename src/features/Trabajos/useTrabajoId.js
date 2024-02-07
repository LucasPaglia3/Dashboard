import { getTrabajoUrlId } from "@/services/apiTrabajos";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useTrabajoId = () => {
  const { url_id } = useParams();
  const { data: trabajo, isPending: isLoading } = useQuery({
    queryKey: ["trabajos", url_id],
    queryFn: () => getTrabajoUrlId(url_id),
    retry: false,
  });

  return { trabajo, isLoading };
};
