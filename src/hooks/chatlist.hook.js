import { useInfiniteQuery } from "@tanstack/react-query";
import { getChatList } from "../api/chatlistApi";

export const useChatList = (options = {}) => {
  return useInfiniteQuery({
    queryKey: ["chats"],
    queryFn: ({ pageParam = 1 }) => getChatList(pageParam),
    getNextPageParam: (lastPage, pages) => {
      // Check if there's a next page URL
      const nextPage = lastPage?.next_page_url ? pages.length + 1 : undefined;
      //   console.log(nextPage);
      return nextPage;
    },
    staleTime: 1000 * 60 * 0.5, // 30 seconds
  });
};
