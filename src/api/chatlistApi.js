import axios from "axios";

const BASE_URL = "https://devapi.beyondchats.com/api/get_all_chats";
const API = axios.create({
  baseURL: BASE_URL,
});

export const getChatList = async (page = null) => {
  try {
    // const url = new URL(`${BASE_URL}`);
    // if (page) url.searchParams.set("page", page);
    // console.log(url.href);
    const { data } = await axios.get(`${BASE_URL}?page=${page}`);
    // console.log("apidata", data?.data);
    return data?.data;
  } catch (error) {
    console.log(error);
    throw error?.response?.data?.error;
  }
};
