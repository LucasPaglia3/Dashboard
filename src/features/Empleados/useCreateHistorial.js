import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createHistorial as apiCreateHistorial } from "../../services/apiEmpleados";
import { toast } from "react-toastify";

export const useCreateHistorial = () => {
  const queryClient = useQueryClient();
  const { mutate: createHistorial, isPending } = useMutation({
    mutationFn: (newHistorial) => apiCreateHistorial(newHistorial),
    onSuccess: () => {
      toast.success("Historial creado con exito!");
      queryClient.invalidateQueries({
        queryKey: ["horasEmpleados"],
      });
    },
    onError: (error) => {
      toast.error("No se pudo crear historial " + error.message);
      console.log(error);
    },
  });

  return { createHistorial, isPending };
};
