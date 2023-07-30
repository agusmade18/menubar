import React from "react";
import menus from "../Menus";
import { NavLink } from "react-router-dom";

function Desktop() {
  return (
    <div className="flex justify-start items-center space-x-3 text-slate-50 text-base">
      {menus.map((menu, i) => (
        <NavLink
          to={menu.link}
          key={i}
          className={({ isActive }) =>
            `cursor-pointer hover:text-red-600 duration-100 hover:border rounded-full h-full px-3 py-2 first-letter ${
              isActive && "text-red-600"
            }`
          }
        >
          <div className="flex justify-center items-center space-x-1">
            <span>{menu.icon}</span>
            <p>{menu.name}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
// cursor-pointer hover:text-red-600 duration-200 hover:border rounded-full h-full px-3 py-2

export default Desktop;
