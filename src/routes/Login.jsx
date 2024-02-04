import LogoIcon from "@/components/ui/LogoIcon";
import FormLogin from "@/features/Autenticación/FormLogin";

import { ToastContainer } from "react-toastify";

const Login = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col gap-2 justify-center items-center">
        <LogoIcon />
        <h3 className="text-xl font-semibold">Ingresá tu cuenta</h3>
        <FormLogin />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Login;
