import React, { useState } from "react";
import { BiDotsVertical, BiPhoneCall, BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Image from "../../../public/profile.png";
import { setChatSectoin } from "../../features/chatsection.slice";
import { MdClear, MdDelete, MdVideoCall, MdWallpaper } from "react-icons/md";
import { GoMute } from "react-icons/go";
import { IconContext } from "react-icons";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "./dotMenu.css";
import { CSSTransition } from "react-transition-group";

const MenuItem = [
  {
    icon: <MdVideoCall />,
    title: "Video Call",
  },
  {
    icon: <BiSearch />,
    title: "Search",
  },
  {
    icon: <MdWallpaper />,
    title: "Change Wallpaper",
  },
  {
    icon: <MdClear />,
    title: "Clear History",
  },
  {
    icon: <MdDelete />,
    title: "Delete chat",
  },
];

function ChatNavabar() {
  const [dotMenu, setDotMenu] = useState(false);
  const dispatch = useDispatch();
  const chatName = useSelector(
    (state) =>
      state.chatSection.chatname?.name ||
      state.chatSection.chatname?.email ||
      "Kundan kumar"
  );

  const handleClickBackToChatlist = function () {
    dispatch(setChatSectoin(null));
    // console.log("he");
  };

  return (
    <IconContext.Provider value={{ className: "text-2xl md:text-xl" }}>
      <div className="fixed w-full top-0 flex items-center justify-between px-2 py-3 md:py-2 md:pr-6 md:w-[65vw] bg-slate-200 dark:bg-slate-800 ">
        <div className="inline-flex items-center space-x-5">
          <button className="md:hidden" onClick={handleClickBackToChatlist}>
            <BsArrowLeft />
          </button>
          <div className="inline-flex items-center space-x-2">
            <span className="h-10 w-10 md:w-8 md:h-8">
              <img src={`${Image}`} alt="" />
            </span>

            <div className="leading-tight text-sm md:leading-normal">
              <div className="tracking-tighter font-semibold">{chatName}</div>
              <span className="text-xs font-light">recently</span>
            </div>
          </div>
        </div>

        <div className="inline-flex gap-6 text-2xl">
          <button>
            <BiPhoneCall />
          </button>
          <button onClick={() => setDotMenu(!dotMenu)}>
            <BiDotsVertical />
          </button>
        </div>
        <CSSTransition
          in={dotMenu}
          timeout={300}
          classNames="dot-menu"
          unmountOnExit
        >
          <div className="absolute top-1 right-2 w-1/2 rounded-md py-2 md:w-1/4 border border-slate-600/40 bg-slate-200 dark:bg-slate-800">
            <ul>
              <li className="flex items-center py-4 justify-between pr-3 border-b-2 border-black pl-4">
                <div className="inline-flex items-center space-x-4 tracking-tight">
                  <span>
                    <GoMute />
                  </span>
                  <span>Mute</span>
                </div>
                <button onClick={() => setDotMenu(!dotMenu)}>
                  <BsArrowRight />
                </button>
              </li>
              {MenuItem.map((item) => (
                <li
                  className="flex items-center space-x-4 py-3 pl-4 tracking-tight"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </CSSTransition>
      </div>
    </IconContext.Provider>
  );
}

export default ChatNavabar;
