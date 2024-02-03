import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as apiLogin } from "../../services/apiAuth";

export const useLogin = () => {
  const navigate = useNavigate();
  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => apiLogin({ email, password }),
    onSuccess: () => {
      navigate("/");
    },
  });

  return { login, isLoggingIn };
};
