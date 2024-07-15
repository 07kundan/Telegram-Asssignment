import React, { useEffect, useState } from "react";
import profile from "../../public/profile.png";
import { useDispatch } from "react-redux";
import { setChatSectoin } from "../features/chatsection.slice";

function ChatList({ content }) {
  const [time, setTime] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const dateTimeString = content.creator?.updated_at;
    // Regular expression to match the time part
    const timeMatch = dateTimeString.match(/T(\d{2}):(\d{2})/);
    if (timeMatch) {
      let hours = parseInt(timeMatch[1], 10);
      const minutes = timeMatch[2];

      // Determine AM/PM suffix
      const ampm = hours >= 12 ? "PM" : "AM";

      // Convert hours from 24-hour to 12-hour format
      hours = hours % 12;
      hours = hours ? hours : 12; // The hour '0' should be '12'

      // Format the time as HH:MM:SS AM/PM
      const Formattedtime = `${hours
        .toString()
        .padStart(2, "0")}:${minutes} ${ampm}`;

      setTime(Formattedtime); // Output: "09:35:57 AM"
    }
  }, []);

  const handlechat = function () {
    dispatch(setChatSectoin(content?.creator));
  };
  return (
    <div className="w-full px-2 border-t border-slate-950 md:py-2.5 md:px-3">
      {/* profile Pic */}
      <button
        className="w-full flex items-center space-x-4"
        onClick={() => {
          handlechat(content?.creator);
        }}
      >
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
      </button>
    </div>
  );
}

export default ChatList;
