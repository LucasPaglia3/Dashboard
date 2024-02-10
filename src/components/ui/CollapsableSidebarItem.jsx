import { useState } from "react";
import { List } from "lucide-react";
import { CalendarClock } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { NavLink } from "react-router-dom";

const CollapsableSideBarItem = ({ children, icon }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className={
          open
            ? "flex flex-row p-2 items-center gap-2 lg:w-56 bg-indigo-100/20 text-blue-700 rounded-lg cursor-pointer transition-all duration-300"
            : "flex flex-row p-2 items-center gap-2 lg:w-56 hover:bg-indigo-100/50 hover:text-blue-600 rounded-lg cursor-pointer transition-all duration-300"
        }
      >
        {icon}
        <span className=" hidden lg:block lg:text-xl lg:font-semibold select-none">
          {children}
        </span>
        <ChevronUp
          className={
            open
              ? `grow ${"-rotate-180 transition-all duration-100"}`
              : `grow ${"rotate-0 transition-all duration-100"}`
          }
        />
      </div>
      {open && (
        <div className="flex flex-col lg:ml-5 lg:w-full p-1 gap-2">
          <NavLink
            to="empleados"
            className={({ isActive }) =>
              isActive
                ? "flex w-fit py-1 px-2 gap-3 items-center bg-indigo-100 text-blue-800 rounded-lg cursor-pointer transition-all duration-300"
                : "flex w-fit py-1 px-2 gap-3 items-center hover:bg-indigo-100/50 hover:text-blue-600 rounded-lg cursor-pointer transition-all duration-150"
            }
          >
            <List />
            <span className=" hidden lg:block lg:text-lg lg:font-medium w-fit select-none">
              Lista empleados
            </span>
          </NavLink>
          <NavLink
            to="horas"
            className={({ isActive }) =>
              isActive
                ? "flex w-fit py-1 px-2 gap-3 items-center bg-indigo-100 text-blue-800 rounded-lg cursor-pointer transition-all duration-300"
                : "flex w-fit py-1 px-2 gap-3 items-center hover:bg-indigo-100/50 hover:text-blue-600 rounded-lg cursor-pointer transition-all duration-150"
            }
          >
            <CalendarClock />
            <span className=" hidden lg:block lg:text-lg lg:font-medium w-fit select-none">
              Horas de trabajo
            </span>
          </NavLink>
        </div>
      )}
    </>
  );
};

export default CollapsableSideBarItem;
