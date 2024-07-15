import React, { useEffect, useRef, useState } from "react";
import ChatNavabar from "./ChatNavabar";
import { BsEmojiAngryFill } from "react-icons/bs";
import { CgAttachment } from "react-icons/cg";
import { BiMicrophone } from "react-icons/bi";
import { IconContext } from "react-icons";
import { getChat } from "../../api/chatApi";
import { useSelector } from "react-redux";
import Image from "../../../public/profile.png";
import Image2 from "../../../public/profile2.jpeg";
import Loader from "../Loader/Loader";

export function BottomInput() {
  return (
    <IconContext.Provider value={{ className: "text-xl" }}>
      <div className="w-full fixed bottom-0  px-4 py-2.5 h-[50px] space-x-3 inline-flex items-center md:w-[65vw] md:h-12 md:py-2 bg-slate-200 dark:bg-slate-700">
        <button>
          <BsEmojiAngryFill />
        </button>
        <input
          className="w-full bg-transparent border-none active:border-none md:text-sm md:h-full focus:outline-none"
          type="text"
          placeholder="Message"
        />
        <button>
          <CgAttachment />
        </button>
        <button>
          <BiMicrophone />
        </button>
      </div>
    </IconContext.Provider>
  );
}

function ChatSection() {
  const [loader, setLoader] = useState(false);
  const [chat, setChat] = useState([]);
  const messagesEndRef = useRef(null);
  const chatName = useSelector(
    (state) =>
      state.chatSection.chatname?.name ||
      state.chatSection.chatname?.email ||
      "Kundan kumar"
  );

  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      setChat([]);
      const data = await getChat();
      // console.log(data);
      setChat(data);
      setLoader(false);
    };
    fetchData();
  }, [chatName]);

  useEffect(() => {
    // Scroll to the bottom after chat updates
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <div className="min-h-screen">
      <ChatNavabar />

      {loader && <Loader />}
      <div className="w-full  pl-4 pt-[73px] pb-[60px] md:pl-7 bg-amber-700/30 dark:bg-slate-800">
        {chat.map((data, index) => (
          <div className="" key={index}>
            {/* date */}
            {data?.created_at && (
              <div className="w-full text-center mt-5 mb-2 md:w-[40vw] ">
                <span className="px-3 py-1 text-sm  rounded-full bg-blue-500/30 dark:bg-blue-500/30">
                  {data?.created_at}
                </span>
              </div>
            )}

            {/* chat */}
            <div className="w-full flex items-end gap-2">
              <span className="h-7 w-7 ">
                <img
                  className="rounded-full"
                  src={`${data?.sender_id == "1" ? Image : Image2}`}
                  alt=""
                />
              </span>
              <div className="w-[70vw] md:max-w-[38vw] ">
                <div
                  className={`mt-2 px-3 py-1 rounded-lg text-sm md:mt-2 inline-flex ${
                    data?.sender_id == "1"
                      ? "bg-white/60 dark:bg-blue-400/30"
                      : "bg-blue-500/30 dark:bg-slate-700/70"
                  }`}
                >
                  <span className="">{data?.message}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      <BottomInput />
    </div>
  );
}

export default ChatSection;
