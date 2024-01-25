import { editCliente as apiEditCliente } from "@/services/apiClientes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useEditCliente = () => {
  const queryClient = useQueryClient();
  const { mutate: editCliente, isPending: isLoading } = useMutation({
    mutationFn: (editedCliente, id) => apiEditCliente(editedCliente, id),
    mutationKey: ["clientes"],
    onSuccess: () => {
      toast.success("Cliente editado con exito!");
      queryClient.invalidateQueries();
    },
  });

  return { editCliente, isLoading };
};
