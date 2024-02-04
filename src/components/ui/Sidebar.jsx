import SideBarItem from "./SidebarItem";
import { Separator } from "@/components/ui/separator";

import { LayoutDashboard } from "lucide-react";
import { Users } from "lucide-react";
import { Building2 } from "lucide-react";
import LogoIcon from "./LogoIcon";
import Logout from "@/features/Autenticación/Logout";
import CollapsableSideBarItem from "./CollapsableSidebarItem";

const SideBar = () => {
  return (
    <>
      <nav className="h-screen sticky top-0 lg:flex bg-gray-100/60 flex-col hidden px-2 lg:w-60 border-r items-center">
        <div className="py-5 lg:pb-6">
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
          <CollapsableSideBarItem icon={<Users />}>
            Empleados
          </CollapsableSideBarItem>
        </div>
        <div className="mb-2 flex gap-3">
          <Logout />
        </div>
      </nav>
    </>
  );
};

export default SideBar;
