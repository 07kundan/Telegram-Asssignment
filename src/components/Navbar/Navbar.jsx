import React, { useState } from "react";
import { CgClose, CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "../../../public/profile.png";
import { FaPersonRifle } from "react-icons/fa6";
import { GrGroup } from "react-icons/gr";
import { FcContacts, FcInvite } from "react-icons/fc";
import { IoCallSharp } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { LuBookMarked } from "react-icons/lu";
import { MdNightlight, MdOutlineFeaturedPlayList } from "react-icons/md";
import { IconContext } from "react-icons";

const menuList = [
  {
    icon: <CgProfile />,
    title: "My Profile",
    bigscreen: true,
  },
  { icon: <FaPersonRifle />, title: "New Group", bigscreen: true },
  { icon: <GrGroup />, title: "Contacts", bigscreen: true },
  { icon: <FcContacts />, title: "Calls", bigscreen: true },
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

export function SideMenu({ setMenu }) {
  return (
    <IconContext.Provider value={{ className: "w-6 h-6 text-slate-500" }}>
      <div className="bg-slate-900 absolute top-0 left-0 w-4/5 h-screen md:w-[20vw] md:h-screen">
        <div className="bg-slate-800 h-[75px] w-full flex items-center justify-end pr-4 border-b border-black md:h-11">
          <button
            className="text-3xl animate-bounce"
            onClick={() => setMenu(false)}
          >
            <CgClose />
          </button>
        </div>

        <div className="mt-3 pl-5 md:mt-2 md:pl-4">
          <div className="flex items-center justify-between pr-5 ">
            <div className="h-20 w-20 md:h-14 md:w-14">
              <img src={`${Image}`} alt="" />
            </div>
            <span>
              <button>toogle</button>
            </span>
          </div>

          <div className=" flex flex-col gap-1 mt-3 py-2 md:mt-2 md:py-1 md:gap-0">
            <span className="font-semibold ">Kundan Kumar</span>
            <span className="text-sm md:text-xs">+91 7634881182</span>
          </div>
        </div>

        <ul className="pl-5 mt-4 md:pl-4">
          {menuList.map(
            (list) =>
              list.bigscreen && (
                <li
                  className="h-12 flex items-center gap-4 md:gap-5 md:h-11 md:text-sm md:font-semibold"
                  key={list.title}
                >
                  <span>{list.icon}</span>
                  <span>{list.title}</span>
                </li>
              )
          )}
          <li className="hidden md:flex items-center gap-4 md:gap-5 md:h-12 md:text-sm md:font-semibold">
            <span>
              <MdNightlight />
            </span>
            <span>Night Mode</span>
            <input className="" type="radio" />
          </li>
        </ul>
      </div>
    </IconContext.Provider>
  );
}

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <IconContext.Provider value={{ className: "text-2xl md:text-lg" }}>
      <div className="w-full sticky top-0 bg-slate-800 ">
        <div className=" h-[75px] flex items-center justify-between px-4 text-xl md:h-11 md:space-x-4">
          <div className="flex items-center justify-center gap-6">
            <button onClick={() => setMenu(!menu)}>
              <GiHamburgerMenu />
            </button>
            <span className="font-bold md:hidden">Telegram</span>
          </div>

          <input
            className="hidden md:block w-full rounded-full h-8 bg-slate-700/60"
            type="search"
          />
          <span className="md:hidden">
            <FaSearch />
          </span>
        </div>

        {menu && <SideMenu setMenu={setMenu} />}
      </div>
    </IconContext.Provider>
  );
}

export default Navbar;
