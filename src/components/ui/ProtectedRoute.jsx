import { useCurrentUser } from "@/features/Autenticación/useCurrentUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Spinner from "./Spinner";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user, isLoading, isAuthenticated } = useCurrentUser();

  console.log(isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, navigate, isLoading]);

  if (isLoading) return <Spinner />;

  if (isAuthenticated) return children;
};

export default ProtectedRoute;
