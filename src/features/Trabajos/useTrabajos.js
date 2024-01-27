import { getTrabajoClientId } from "@/services/apiTrabajos";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useTrabajos = () => {
  const { clienteId } = useParams();
  const { data: trabajos, isPending: isLoading } = useQuery({
    queryKey: ["trabajos", clienteId],
    queryFn: () => getTrabajoClientId(clienteId),
  });

  return { trabajos, isLoading };
};
