import { Outlet } from "react-router-dom";
import SideBar from "../components/ui/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <main className="flex relative w-full h-dvh overflow-auto">
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
      <SideBar />
      <div className=" h-full block py-9 px-4 bg-white grow overflow-auto">
        <Outlet />
      </div>
    </main>
  );
};

export default Root;
