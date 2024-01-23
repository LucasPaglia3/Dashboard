import { getAllClientes } from "../../services/apiClientes";
import { useQuery } from "@tanstack/react-query";

export const useClientes = () => {
  const { data: clientes, isPending: isLoading } = useQuery({
    queryKey: ["clientes"],
    queryFn: getAllClientes,
  });

  return { clientes, isLoading };
};
