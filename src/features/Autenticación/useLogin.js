import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as apiLogin } from "../../services/apiAuth";
import { toast } from "react-toastify";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => apiLogin({ email, password }),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      navigate("/", { replace: true });
    },
    onError: () => {
      toast.error("El usuario y/o la contraseña ingresada son incorrectos!");
    },
  });

  return { login, isLoggingIn };
};
