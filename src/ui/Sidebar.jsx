import { Factory } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { Users } from "lucide-react";
import { useLocation } from "react-router-dom";
import SideBarItem from "./SidebarItem";
import { Separator } from "@/components/ui/separator";

const SideBar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <nav className="h-screen sticky top-0 lg:flex flex-col hidden px-2 xl:w-60 border-r items-center">
      <div className="py-5 xl:pb-6">
        <Factory className="size-10 xl:size-20 fill-blue-400" />
      </div>
      <Separator className="w-5/6" />
      <div className="flex flex-col items-center gap-2 pt-8 grow">
        <SideBarItem icon={<LayoutDashboard />} path={"/"}>
          Dashboard
        </SideBarItem>
        <SideBarItem icon={<Users />} path={"/contacts"}>
          Personas
        </SideBarItem>
      </div>
    </nav>
  );
};

export default SideBar;
