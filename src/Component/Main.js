import React from "react";
import { AiOutlineCoffee } from "react-icons/ai";
import Mobile from "./Mobile/Mobile";
import Desktop from "./Desktop/Desktop";

function Main({ children }) {
  return (
    <>
      <header className="from-gray-900 to-gray-600 bg-gradient-to-r flex justify-center items-center">
        <div className="flex justify-between items-center md:w-[90%] w-full h-[80px]">
          {/* LOGO */}
          <div className="flex justify-center items-center w-fit px-3 text-slate-50 space-x-2">
            <span className="text-3xl">
              <AiOutlineCoffee />
            </span>
            <p className="text-xl font-extrabold">
              Coffee<span className=" text-red-600">Code</span>
            </p>
          </div>
          {/* Menu desktop dan mobile */}
          <div className="md:hidden block">
            <Mobile />
          </div>
          <div className="hidden md:block">
            <Desktop />
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}

export default Main;
