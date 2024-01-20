import { Outlet } from "react-router-dom";
import SideBar from "../ui/Sidebar";

const Root = () => {
  return (
    <div className="flex relative w-full min-h-screen">
      <SideBar />
      <main className="p-12 bg-gray-50 grow">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
