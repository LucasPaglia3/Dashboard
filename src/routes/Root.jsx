import { Outlet } from "react-router-dom";
import SideBar from "../ui/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <>
      <div className="flex relative w-full min-h-screen">
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
        <main className="p-12 bg-gray-50 grow">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Root;
