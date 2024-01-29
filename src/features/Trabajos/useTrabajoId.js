import { getTrabajoUrlId } from "@/services/apiTrabajos";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useTrabajoId = () => {
  const { urlId } = useParams();
  const { data: trabajo, isPending: isLoading } = useQuery({
    queryKey: ["trabajos", urlId],
    queryFn: () => getTrabajoUrlId(urlId),
    retry: false,
  });
  console.log(urlId);

  return { trabajo, isLoading };
};
