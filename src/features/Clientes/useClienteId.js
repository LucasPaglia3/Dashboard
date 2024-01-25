import { getCliente } from "@/services/apiClientes";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useClienteId = () => {
  const { clienteId } = useParams();
  const { data: cliente, isPending: isLoading } = useQuery({
    queryKey: ["clientes", clienteId], // Hace el query distinto al de solo 'clientes'(que se usa para la lista de clientes).
    queryFn: () => getCliente(clienteId), // ⬆️ Si no, intenta utilizar el mismo query para la lista de todos los clientes, generando un error.
    retry: false, // No queremos re intentar el query. Si no existe el id no existe la pagina.
  });

  return { cliente, isLoading };
};
