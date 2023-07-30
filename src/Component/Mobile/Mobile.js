import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import menus from "../Menus";
import { NavLink } from "react-router-dom";

function Mobile() {
  const [icon, setIcon] = useState(false);
  const onClick = () => {
    setIcon(!icon);
  };
  return (
    <>
      <button className="text-slate-50 text-2xl pr-3" onClick={onClick}>
        {icon ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      <div
        className={`absolute w-[50%] h-screen left-0 top-0 -z-10 from-gray-900 to-gray-600 bg-gradient-to-r transition duration-300 transform ${
          icon ? "translate-x-0" : "-translate-x-96"
        }`}
      >
        <div className="flex flex-col justify-center items-start text-base text-slate-50 space-y-2 ml-5 relative top-[100px]">
          {menus.map((menu, i) => (
            <NavLink
              to={menu.link}
              key={i}
              className={({ isActive }) =>
                `cursor-pointer hover:text-red-600 hover:border hover:rounded-l-full w-full p-3 duration-300 ${
                  isActive && "text-red-600 rounded-l-full border"
                }`
              }
            >
              <div className="flex justify-start items-center space-x-3">
                <span>{menu.icon}</span>
                <p>{menu.name}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

export default Mobile;
