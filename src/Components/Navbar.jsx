// import Link from "next/link";
// import { NAV_ITEMS } from "@/Constent/Constents";

import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { useTheme } from "next-themes";

const NavBar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <nav className="sticky w-full sm:px-20 mx-auto align-baseline px-3 py-4 shadow-sm">
      <div className="justify-between md:items-center md:flex">
        <div className="flex justify-between">
          <div className="p-2 flex text-2xl gap-1">
            <span>🧑🏻‍💻</span>
            <h2 className="font-bold">Portfolio Santhosh Guntha</h2>
          </div>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setMobileNav(!mobileNav)}
            >
              {mobileNav ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
            </button>
          </div>
        </div>

        <div
          className={`text-end md:block ${
            mobileNav ? "block" : "hidden"
          } mt-4 md:mt-0`}
        >
          {/* <div className="flex flex-col md:flex-row md:items-center gap-4">
            {NAV_ITEMS.map((item, idx) => {
              return (
                <Link
                  key={idx}
                  href={item.page}
                  className={
                    "block lg:inline-block text-neutral-900  hover:text-neutral-500"
                  }
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setMobileNav(!mobileNav)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div> */}
          {currentTheme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              className="bg-slate-100 p-2 rounded-xl"
            >
              <RiSunLine size={25} color="black" />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="bg-slate-100 p-2 rounded-xl"
            >
              <RiMoonFill size={25} />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
