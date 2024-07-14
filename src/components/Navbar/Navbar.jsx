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
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { IconContext } from "react-icons";

const menuList = [
  {
    icon: <CgProfile />,
    title: "My Profile",
  },
  { icon: <FaPersonRifle />, title: "New Group" },
  { icon: <GrGroup />, title: "Contacts" },
  { icon: <FcContacts />, title: "Calls" },
  { icon: <IoCallSharp />, title: "People Nearby" },
  { icon: <BsPeopleFill />, title: "Saved Message" },
  { icon: <LuBookMarked />, title: "Settings" },
  { icon: <FcInvite />, title: "Invite Friends" },
  { icon: <MdOutlineFeaturedPlayList />, title: "Telegram Features" },
];

export function SideMenu({ setMenu }) {
  return (
    <IconContext.Provider value={{ className: "w-6 h-6 text-slate-500" }}>
      <div className="bg-zinc-700 absolute top-0 left-0 w-4/5 h-screen md:w-[18vw] md:h-screen">
        <div className="bg-zinc-800 h-[75px] w-full flex items-center justify-end pr-4 border-b border-black">
          <button
            className="text-3xl animate-bounce"
            onClick={() => setMenu(false)}
          >
            <CgClose />
          </button>
        </div>

        <div className="mt-3 pl-5">
          <div className="flex items-center justify-between pr-5 ">
            <div className="h-20 w-20 ">
              <img src={`${Image}`} alt="" />
            </div>
            <span>
              <button>toogle</button>
            </span>
          </div>

          <div className=" flex flex-col gap-1 mt-3 py-2">
            <span className="font-semibold">Kundan Kumar</span>
            <span className="text-sm">+91 7634881182</span>
          </div>
        </div>

        <ul className="pl-5 mt-4">
          {menuList.map((list) => (
            <li className="h-12 flex items-center gap-4" key={list.title}>
              <span>{list.icon}</span>
              <span>{list.title}</span>
            </li>
          ))}
          <li className="hidden sm:block">
            <span>night</span>
            <span>mode</span>
            <button>toogle</button>
          </li>
        </ul>
      </div>
    </IconContext.Provider>
  );
}

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <IconContext.Provider value={{ className: "text-2xl " }}>
      <div className="w-full sticky top-0 bg-zinc-800">
        <div className=" h-[75px] flex items-center justify-between px-4 text-xl">
          <div className="flex items-center justify-center gap-6">
            <button onClick={() => setMenu(!menu)}>
              <GiHamburgerMenu />
            </button>
            <span className="font-bold">Telegram</span>
          </div>

          <input
            className="hidden md:block w-5/6 rounded-xl h-8"
            type="search"
          />
          <FaSearch />
        </div>

        {menu && <SideMenu setMenu={setMenu} />}
      </div>
    </IconContext.Provider>
  );
}

export default Navbar;
