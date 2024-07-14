import React, { useEffect, useState } from "react";
import ChatList from "../ChatList";
import { useInView } from "react-intersection-observer";
import { useChatList } from "../../hooks/chatlist.hook";
import Loader from "../Loader/Loader";

function Sidebar() {
  const { data, fetchNextPage, isFetched, isFetching } = useChatList();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
    console.log("isinview", data);
  }, [inView]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-full ">
      {/* {console.log(data)} */}
      {isFetched &&
        data?.pages.map((page, index) => {
          return (
            <React.Fragment key={index}>
              {isFetched &&
                page.data.map((listdata, index) => {
                  return <ChatList content={listdata} key={index} />;
                })}
            </React.Fragment>
          );
        })}
      <div className="" ref={ref}></div>
      {isFetching && <Loader />}
      {/* {!hasMore && <p>No more data</p>} */}
    </div>
  );
}

export default Sidebar;
