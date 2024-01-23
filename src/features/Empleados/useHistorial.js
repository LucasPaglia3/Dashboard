import { getHistorial } from "../../services/apiEmpleados";
import { useQuery } from "@tanstack/react-query";

export const useHistorial = () => {
  const { data: historial, isPending: isLoading } = useQuery({
    queryKey: ["horasEmpleados"],
    queryFn: getHistorial,
  });

  return { historial, isLoading };
};
