import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTarea as apiDeleteTarea } from "@/services/apiTareas";
import { toast } from "react-toastify";

export const useDeleteTarea = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteTarea, isPending: isDeleting } = useMutation({
    mutationFn: (id) => apiDeleteTarea(id),
    mutationKey: ["tareas"],
    onSuccess: () => {
      toast.success("Tarea eliminada con éxito!");
      queryClient.invalidateQueries({
        queryKey: ["tareas"],
      });
    },
    onError: (error) => {
      toast.error("No se pudo crear tarea, " + error.message);
    },
  });

  return { deleteTarea, isDeleting };
};
