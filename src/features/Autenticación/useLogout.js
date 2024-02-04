import { logout as apiLogout } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logOut, isPending: isLoggingOut } = useMutation({
    mutationFn: apiLogout,
    mutationKey: ["user"],
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { logOut, isLoggingOut };
};
