import React, { useEffect, useState } from "react";
import { CgClose, CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "../../../public/profile.png";
import { FaPersonRifle } from "react-icons/fa6";
import { GrGroup } from "react-icons/gr";
import { FcContacts, FcInvite } from "react-icons/fc";
import { IoCall, IoCallSharp } from "react-icons/io5";
import { BsPeopleFill, BsToggleOff, BsToggleOn } from "react-icons/bs";
import { LuBookMarked } from "react-icons/lu";
import {
  MdLightMode,
  MdNightlight,
  MdOutlineFeaturedPlayList,
} from "react-icons/md";
import { IconContext } from "react-icons";
import "./sideMenu.css";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../features/theme.slice";

const menuList = [
  {
    icon: <CgProfile />,
    title: "My Profile",
    bigscreen: true,
  },
  { icon: <FaPersonRifle />, title: "New Group", bigscreen: true },
  { icon: <GrGroup />, title: "Contacts", bigscreen: true },
  { icon: <IoCall />, title: "Calls", bigscreen: true },
  { icon: <IoCallSharp />, title: "People Nearby", bigscreen: false },
  { icon: <BsPeopleFill />, title: "Saved Message", bigscreen: true },
  { icon: <LuBookMarked />, title: "Settings", bigscreen: true },
  { icon: <FcInvite />, title: "Invite Friends", bigscreen: false },
  {
    icon: <MdOutlineFeaturedPlayList />,
    title: "Telegram Features",
    bigscreen: false,
  },
];

// subcomponent
export function SideMenu({ setMenu }) {
  const [on, setOff] = useState(true);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <IconContext.Provider value={{ className: "w-6 h-6 text-slate-500" }}>
      <div className="absolute top-0 left-0 w-4/5 h-screen  md:w-[20vw] md:h-screen bg-slate-200 dark:text-slate-200/80 dark:bg-slate-900 ">
        <div className=" h-[75px] w-full flex items-center justify-end pr-4 border-b md:h-11 border-black bg-slate-300 dark:bg-slate-800">
          <button
            className="text-3xl animate-bounce"
            onClick={() => setMenu(false)}
          >
            <CgClose />
          </button>
        </div>

        <div className="mt-3 pl-5 md:mt-3 md:pl-4">
          <div className="flex items-center justify-between pr-5 ">
            <div className="h-20 w-20 md:h-14 md:w-14">
              <img src={`${Image}`} alt="" />
            </div>
            <span className="flex gap-2 md:hidden">
              {theme === "dark" ? <MdNightlight /> : <MdLightMode />}
              <button
                onClick={() => {
                  setOff(!on);
                  theme === "dark"
                    ? dispatch(setTheme("light"))
                    : dispatch(setTheme("dark"));
                }}
              >
                {on ? <BsToggleOn /> : <BsToggleOff />}
              </button>
            </span>
          </div>

          <div className=" flex flex-col gap-1 mt-3 py-2 md:mt-2 md:py-1 md:gap-0">
            <span className="font-semibold ">Kundan Kumar</span>
            <span className="text-sm md:text-sm">+91 7634881182</span>
          </div>
        </div>

        <ul className=" mt-4 ">
          {menuList.map(
            (list) =>
              list.bigscreen && (
                <li
                  className="h-12 pl-5 flex items-center gap-4 md:gap-5 md:h-11 md:font-semibold md:pl-4 dark:hover:bg-blue-400/20"
                  key={list.title}
                >
                  <span>{list.icon}</span>
                  <span>{list.title}</span>
                </li>
              )
          )}
          <li className="hidden md:flex items-center justify-between md:h-12 md:font-semibold  md:pl-4 md:pr-8 dark:hover:bg-blue-400/20">
            <div className="flex gap-5">
              <span>
                {theme === "light" ? <MdLightMode /> : <MdNightlight />}
              </span>
              <span>Night Mode</span>
            </div>
            <button
              onClick={() => {
                setOff(!on);
                theme === "dark"
                  ? dispatch(setTheme("light"))
                  : dispatch(setTheme("dark"));
              }}
            >
              {on ? <BsToggleOn /> : <BsToggleOff />}
            </button>
          </li>
        </ul>
      </div>
    </IconContext.Provider>
  );
}

// main component
function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <IconContext.Provider value={{ className: "text-2xl md:text-lg" }}>
      <div className="w-full fixed top-0  md:w-[35vw] bg-slate-200 dark:bg-slate-800">
        <div className=" h-[65px] flex items-center justify-between px-4 text-xl md:py-2 md:h-12 md:space-x-4 bg-slate-300 dark:bg-slate-900 ">
          <div className="flex items-center justify-center gap-6">
            <button onClick={() => setMenu(!menu)}>
              <GiHamburgerMenu />
            </button>
            <span className="font-bold md:hidden">Telegram</span>
          </div>

          <input
            className="hidden md:block w-full rounded-full h-8 bg-slate-600/30 focus:outline-none focus:border-2 border-slate-400 dark:bg-slate-700/60"
            type="search"
          />
          <span className="md:hidden">
            <FaSearch />
          </span>
        </div>

        <CSSTransition
          in={menu}
          timeout={300}
          classNames="side-menu"
          unmountOnExit
        >
          <SideMenu setMenu={setMenu} />
        </CSSTransition>
      </div>
    </IconContext.Provider>
  );
}

export default Navbar;
