import { Factory } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { Users } from "lucide-react";
import { useLocation } from "react-router-dom";
import SideBarItem from "./SidebarItem";
import { Divider } from "@nextui-org/react";

const SideBar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="py-4 bg-slate-100 h-screen">
      <nav className="h-full flex flex-col w-16 xl:w-60 border-y border-r rounded-r-xl shadow-sm items-center bg-white">
        <div className="pt-5 pb-8 xl:pb-11">
          <Factory className="size-10 xl:size-24 fill-blue-400" />
        </div>
        <Divider className="w-5/6" />
        <div className="flex flex-col items-center gap-2 pt-8">
          <SideBarItem icon={<LayoutDashboard />} path={"/"}>
            Dashboard
          </SideBarItem>
          <SideBarItem icon={<Users />} path={"/contacts"}>
            Personas
          </SideBarItem>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
