import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useLogout } from "./useLogout";
import Spinner from "@/components/ui/Spinner";

// TODO: TERMINAR!

const Logout = () => {
  const { logOut, isLoggingOut } = useLogout();
  return (
    <Button className="flex gap-1" onClick={logOut} disabled={isLoggingOut}>
      {!isLoggingOut ? (
        <>
          <LogOut /> <span>Cerrar sesión</span>
        </>
      ) : (
        <Spinner isForButton={true} />
      )}
    </Button>
  );
};

export default Logout;
