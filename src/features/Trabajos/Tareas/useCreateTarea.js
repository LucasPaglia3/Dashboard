import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTarea as apiCreateTarea } from "../../../services/apiTareas";
import { toast } from "react-toastify";

export const useCreateTarea = () => {
  const { url_id } = useParams();
  const queryClient = useQueryClient();
  const { mutate: createTarea, isPending: isCreating } = useMutation({
    mutationFn: (newTarea) => apiCreateTarea(newTarea, url_id),
    mutationKey: ["tareas"],
    onSuccess: () => {
      toast.success("Tarea creada con éxito!");
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error("No se pudo crear tarea, " + error.message);
    },
  });

  return { createTarea, isCreating };
};
