import { editCliente as apiEditCliente } from "@/services/apiClientes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const useEditCliente = () => {
  const queryClient = useQueryClient();
  const { clienteId } = useParams();
  const { mutate: editCliente, isPending: isLoading } = useMutation({
    mutationFn: (editedCliente) => {
      apiEditCliente(editedCliente, clienteId);
    },
    mutationKey: ["clientes", clienteId],
    onSuccess: () => {
      toast.success("Cliente editado con exito!");
      queryClient.invalidateQueries();
    },
  });

  return { editCliente, isLoading };
};
