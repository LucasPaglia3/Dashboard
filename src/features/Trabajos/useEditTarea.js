import { updateTareas as apiUpdateTarea } from "@/services/apiTrabajos";
import { useMutation /* , useQueryClient */ } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useEditTarea = () => {
  const { url_id } = useParams();
  const { mutate: updateTarea, isPending: isUpdating } = useMutation({
    mutationFn: (newTarea) => apiUpdateTarea(url_id, newTarea),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { updateTarea, isUpdating };
};
