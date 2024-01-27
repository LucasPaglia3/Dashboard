import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTrabajo as apiCreateTrabajo } from "@/services/apiTrabajos";
import { toast } from "react-toastify";

export const useCreateTrabajo = () => {
  const queryClient = useQueryClient();
  const { mutate: createTrabajo, isPending: isLoading } = useMutation({
    mutationFn: (newTrabajo) => apiCreateTrabajo(newTrabajo),
    mutationKey: ["trabajos"],
    onSuccess: () => {
      toast.success("Trabajo creado con éxito!"),
        queryClient.invalidateQueries({ queryKey: ["trabajos"] });
    },
    onError: () => {
      toast.error("No se pudo crear trabajo!");
    },
  });

  return { createTrabajo, isLoading };
};
