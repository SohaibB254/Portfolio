import { ArrowDown, House, Moon, Sun,FolderCode,Brain,User, Folder } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import pfp from "../../assets/images/dev/dp.png";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };
  const { toggleTheme, theme } = useTheme();
  return (
    <div className="flex justify-between items-center bg-(--bgLight) z-40 sticky top-0 px-4 py-4 lg:px-20">
      {/* Profile pic and logo */}
      <div className="flex items-center gap-4 z-40 " id="dp">
        <div
          className="h-12 w-12 border  bg-(--sectionLight) border-(--sectionLight) overflow-hidden rounded-full"
          id="pic"
        >
          <img className="object-cover" src={pfp} alt="Dev pfp" />
        </div>
        <h1 className="font-logo text-(--textLight) text-2xl">Sohaib</h1>
      </div>
      {/* Menu */}
      <div className="relative  ">
        <ul
          className={`flex z-40 fixed lg:static lg:flex-row flex-col lg:h-auto h-full lg:translate-x-0  top-18 lg:p-0 px-10 right-0 py-4 bg-(--bgLight) gap-8  text-(--textLight) ${
            isNavOpen ? "translate-x-0" : "translate-x-100"
          } transition-all duration-300  font-inter`}
        >
          <Link className="flex gap-3 items-center" onClick={toggleNav} to={"/"}>
           <House className="lg:hidden block"/> Home
          </Link>
          <Link className="flex gap-3 items-center" onClick={toggleNav} to={"/devskills"}>
           <Brain className="lg:hidden block"/> Skills
          </Link>
          <Link className="flex gap-3 items-center" onClick={toggleNav} to={"/projects"}>
           <FolderCode className="lg:hidden block"/> Projects
          </Link>
          <Link className="flex gap-3 items-center" onClick={toggleNav} to={"/about"}>
           <User className="lg:hidden block"/> About
          </Link>
        </ul>
      </div>
      {/* Overlay */}
      {isNavOpen && (
        <div onClick={toggleNav} className="fixed inset-0 lg:hidden backdrop-blur-xs bg-(--bgLight)/20 z-30"></div>
      )}
      {/* ThemeIcon and CTA */}
      <div className="flex text-(--textLight) z-40 items-center gap-4">
        {theme === "light" && (
          <Sun size={18} onClick={toggleTheme} strokeWidth={1} />
        )}
        {theme === "dark" && (
          <Moon size={18} onClick={toggleTheme} strokeWidth={1} />
        )}
        {/* Menu Btn */}
        <div
          id="menu-btn"
          onClick={() => setIsNavOpen((prev) => !prev)}
          className="flex flex-col justify-center lg:hidden items-center gap-1 p-1 cursor-pointer"
        >
          <div
            className={`w-5 h-0.5 bg-(--textLight) transition-all duration-300 ease-in-out ${
              isNavOpen
                ? "rotate-45  translate-y-[7px]"
                : "rotate-0 translate-y-0"
            } origin-center`}
          ></div>
          <div
            className={`w-5 h-0.5 bg-(--textLight) transition-all duration-200 ease-in-out ${
              isNavOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-5 h-0.5 bg-(--textLight) transition-all duration-300 ease-in-out ${
              isNavOpen
                ? "-rotate-45 -translate-y-[7px]"
                : "rotate-0 translate-y-0"
            } origin-center`}
          ></div>
        </div>
        {/* Resume Button  */}
        <button className="bg-(--accent) hidden lg:block font-inter hover:bg-[#744cd1] transition  cursor-pointer active:shadow-sm shadow-black/70 p-2 px-6 text-(--textDark) rounded-full">
          Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
