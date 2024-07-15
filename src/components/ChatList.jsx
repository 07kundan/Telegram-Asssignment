import React, { useEffect, useState } from "react";
import profile from "../../public/profile.png";
import { useDispatch, useSelector } from "react-redux";
import { setChatSectoin } from "../features/chatsection.slice";
import { setChatListActive } from "../features/chatListActive";

function ChatList({ content }) {
  const [time, setTime] = useState();
  const dispatch = useDispatch();
  const listId = useSelector((state) => state.chatList.isActiveId);

  useEffect(() => {
    const dateTimeString = content.creator?.updated_at;
    if (dateTimeString) {
      // Get date and month
      const dateObject = new Date(dateTimeString);
      const month = dateObject.toLocaleString("default", { month: "short" });
      const date = dateObject.getDate();

      // Format date and month
      const formattedDateTime = `${date} ${month}`;

      setTime(formattedDateTime); // Example output: "15 Jul"
    }
  }, [content.creator?.updated_at]);

  return (
    <button
      onClick={() => {
        dispatch(setChatSectoin(content?.creator));
        dispatch(setChatListActive(content?.id));
        // console.log(content);
      }}
      className={`w-full px-2 border-t border-slate-950 md:py-2.5 md:px-3  ${
        listId == content?.id
          ? "bg-blue-500/30"
          : "bg-slate-800 hover:bg-blue-400/20"
      }`}
    >
      {/* profile Pic */}
      <div className="w-full flex items-center space-x-4">
        <div className="h-20 w-20 flex justify-center items-center md:h-12 md:w-12">
          <img src={`${profile}`} alt="img" />
        </div>

        {/* chat section */}
        <div className="w-full">
          <div className="flex justify-between">
            <div className=" text-left md:space-y-1">
              <div className="font-semibold tracking-tight md:tracking-normal md:text-sm">
                {content?.creator?.name ||
                  content?.creator?.email ||
                  content.creator.city}
              </div>
              <div className="text-sm md:text-xs">Message</div>
            </div>
            <span className="text-sm md:text-[11px]"> {time}</span>
          </div>
        </div>
      </div>
    </button>
  );
}

export default ChatList;
