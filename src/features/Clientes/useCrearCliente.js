import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCliente as apiCreateCliente } from "@/services/apiClientes";
import { toast } from "react-toastify";

export const useCrearCliente = () => {
  const queryClient = useQueryClient();
  const { mutate: createCliente, isPending: isLoading } = useMutation({
    mutationFn: (newCliente) => apiCreateCliente(newCliente),
    mutationKey: ["clientes"],
    onSuccess: () => {
      toast.success("Cliente creado con éxito!");
      queryClient.invalidateQueries({ queryKey: ["clientes"] });
    },
  });

  return { createCliente, isLoading };
};
