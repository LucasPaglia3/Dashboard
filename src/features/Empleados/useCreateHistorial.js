import { useMutation } from "@tanstack/react-query";
import { createHistorial as apiCreateHistorial } from "../../services/apiEmpleados";

export const useCreateHistorial = () => {
  const { mutate: createHistorial, isPending } = useMutation({
    mutationFn: (newHistorial) => apiCreateHistorial(newHistorial),
  });

  return { createHistorial, isPending };
};
