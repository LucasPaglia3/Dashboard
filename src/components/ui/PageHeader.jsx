import { useState } from "react";
import { NavLink } from "react-router-dom";

import { Button } from "./button";
import { Separator } from "./separator";

import { Users } from "lucide-react";
import { Building2 } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import CollapsableSideBarItem from "./CollapsableSidebarItem";

const PageHeader = ({ title }) => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      {openNav && (
        <div className="bg-white w-full h-full flex flex-col gap-1">
          <div className="flex items-center">
            <Button
              onClick={() => setOpenNav(!openNav)}
              variant="link"
              className="lg:hidden m-0 p-0"
            >
              <X />
            </Button>
          </div>
          <Separator />
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex items-center w-[12rem] rounded-lg text-2xl font-semibold gap-2 bg-indigo-100 text-blue-800"
                : "flex items-center w-[12rem] text-2xl font-semibold gap-2"
            }
            to={"/"}
          >
            <LayoutDashboard />
            Inicio
          </NavLink>
          <Separator />
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex items-center w-[12rem] rounded-lg text-2xl font-semibold gap-2 bg-indigo-100 text-blue-800"
                : "flex items-center w-[12rem] text-2xl font-semibold gap-2"
            }
            to={"/clientes"}
          >
            <Building2 />
            Clientes
          </NavLink>
          <Separator />
          <CollapsableSideBarItem icon={<Users />}>
            Empleados
          </CollapsableSideBarItem>
          <Separator />
        </div>
      )}

      {!openNav && (
        <Button
          onClick={() => setOpenNav(!openNav)}
          variant="link"
          className="lg:hidden self-baseline m-0 p-0"
        >
          <Menu />
        </Button>
      )}
      <h1 className="text-5xl font-extrabold tracking-tight pb-5 text-center lg:text-start">
        {title}
      </h1>
    </>
  );
};

export default PageHeader;
