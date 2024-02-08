import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getTareasById } from "@/services/apiTareas";

export const useTareaById = () => {
  const { url_id } = useParams();
  const { data: tareas, isPending: isLoading } = useQuery({
    queryFn: () => getTareasById(url_id),
    queryKey: ["tareas", url_id],
  });

  return { tareas, isLoading };
};
