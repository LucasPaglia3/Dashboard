import { NavLink } from "react-router-dom";

const SideBarItem = ({ children, icon, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? "flex flex-row p-2 items-center gap-2 xl:w-56 bg-indigo-100 text-blue-800 rounded-lg cursor-pointer"
          : "flex flex-row p-2 items-center gap-2 xl:w-56 hover:bg-indigo-100 hover:text-blue-600 rounded-lg cursor-pointer"
      }
    >
      {icon}

      <span className=" hidden xl:block xl:text-xl xl:font-semibold ">
        {children}
      </span>
    </NavLink>
  );
};

export default SideBarItem;
