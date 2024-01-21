import { getAllEmpleados } from "../../services/apiEmpleados";
import { useQuery } from "@tanstack/react-query";

export const useEmpleados = () => {
  const { data: empleados, isPending: isLoading } = useQuery({
    queryKey: ["empleados"],
    queryFn: getAllEmpleados,
  });

  return { empleados, isLoading };
};
