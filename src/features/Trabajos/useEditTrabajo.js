import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editTrabajo as apiEditTrabajo } from "../../services/apiTrabajos";
import { toast } from "react-toastify";

export const useEditTrabajo = () => {
  const queryClient = useQueryClient();
  const { mutate: editTrabajo, isPending: isEditing } = useMutation({
    mutationFn: ({ newTrabajo, id }) => apiEditTrabajo(newTrabajo, id),
    mutationKey: ["trabajos"],
    onSuccess: () => {
      toast.success("Trabajo editado con éxito!"),
        queryClient.invalidateQueries({ queryKey: ["trabajos"] });
    },
    onError: (error) => {
      console.log(error);
      toast.error("No se pudo editar trabajo!");
    },
  });
  return { editTrabajo, isEditing };
};
