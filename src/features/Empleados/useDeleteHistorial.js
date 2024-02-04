import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteHistorial as apiDeleteHistorial } from "@/services/apiEmpleados";
import { toast } from "react-toastify";

export const useDeleteHistorial = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteHistorial, isPending: isDeleting } = useMutation({
    mutationFn: (id) => apiDeleteHistorial(id),
    mutationKey: ["horasEmpleados"],
    onSuccess: () => {
      toast.success("Historial eliminado con exito!");
      queryClient.invalidateQueries({
        queryKey: ["horasEmpleados"],
      });
    },
    onError: (error) => {
      toast.error("No se pudo eliminar historial " + error.message);
      console.log(error);
    },
  });

  return { deleteHistorial, isDeleting };
};
