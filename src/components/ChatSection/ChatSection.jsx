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

export function BottomInput() {
  return (
    <IconContext.Provider value={{ className: "text-xl" }}>
      <div className="w-full fixed bottom-0 bg-slate-800 px-4 py-2.5 h-[50px] space-x-3 inline-flex items-center md:w-[65vw] md:h-12 md:py-2">
        <button>
          <BsEmojiAngryFill />
        </button>
        <input
          className="w-full bg-transparent border-none active:border-none md:text-sm md:h-full"
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
  const [chat, setChat] = useState([]);
  const messagesEndRef = useRef(null);
  const chatName = useSelector(
    (state) =>
      state.chatSection.chatname?.name ||
      state.chatSection.chatname?.email ||
      "Kundan kumar"
  );

  useEffect(() => {
    const fetchData = async () => {
      setChat([]);
      const data = await getChat();
      console.log(data);
      setChat(data);
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
      <div className="w-full pl-4 mb-[60px] md:pl-7 ">
        {chat.map((data, index) => (
          <div className="" key={index}>
            {/* date */}
            {data?.created_at && (
              <div className="w-full text-center mt-5 mb-2 md:w-[40vw] ">
                <span className="px-3 py-1 text-sm bg-blue-500/30 rounded-full">
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
              <div
                className={`w-[70vw]  mt-2 px-3 py-1 rounded-lg text-sm md:mt-3 md:max-w-[38vw] ${
                  data?.sender_id == "1" ? "bg-blue-400/30" : "bg-slate-800"
                }`}
              >
                <span className="">{data?.message}</span>
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
