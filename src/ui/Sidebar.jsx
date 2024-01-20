import { Factory } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { Users } from "lucide-react";
import { HelpCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import SideBarItem from "./SidebarItem";

const SideBar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <aside className="min-h-screen flex flex-col w-64 border-r-1 items-center border-r">
      <div className="py-8">
        <Factory className="size-24 fill-blue-400" />
      </div>
      <div className="flex flex-col items-center gap-4">
        <SideBarItem icon={<LayoutDashboard />} path={"/"}>
          Dashboard
        </SideBarItem>
        <SideBarItem icon={<Users />} path={"/contacts"}>
          Personas
        </SideBarItem>
      </div>
    </aside>
  );
};

export default SideBar;
