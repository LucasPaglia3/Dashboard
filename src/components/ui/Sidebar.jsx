import { LayoutDashboard } from "lucide-react";
import { Users } from "lucide-react";
import { useLocation } from "react-router-dom";
import SideBarItem from "./SidebarItem";
import { Separator } from "@/components/ui/separator";
import { Building2 } from "lucide-react";
import LogoIcon from "./LogoIcon";

const SideBar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <nav className="h-screen sticky top-0 lg:flex bg-gray-100/60 flex-col hidden px-2 xl:w-60 border-r items-center">
      <div className="py-5 xl:pb-6">
        <LogoIcon />
      </div>
      <Separator className="w-5/6" />
      <div className="flex flex-col items-center gap-2 pt-8 grow">
        <SideBarItem icon={<LayoutDashboard />} path={"/"}>
          Inicio
        </SideBarItem>
        <SideBarItem icon={<Building2 />} path={"/clientes"}>
          Clientes
        </SideBarItem>
        <SideBarItem icon={<Users />} path={"/contacts"}>
          Empleados
        </SideBarItem>
      </div>
    </nav>
  );
};

export default SideBar;
