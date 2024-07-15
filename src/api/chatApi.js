import axios from "axios";

const BASE_URL =
  "https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888";
const API = axios.create({
  baseURL: BASE_URL,
});

export const getChat = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}`);
    // console.log("apidata", data?.data);
    let arrayData = data?.data;
    arrayData.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    const updatedData = arrayData.map((item) => ({
      ...item,
      created_at: new Date(item.created_at).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
    }));

    // Remove duplicates based on created_at
    const uniqueData = updatedData.reduce((acc, curr) => {
      const existing = acc.find((item) => item.created_at === curr.created_at);
      if (!existing) {
        acc.push({ ...curr });
      } else {
        delete curr.created_at; // Remove created_at attribute if duplicate
        acc.push({ ...curr });
      }
      return acc;
    }, []);

    // console.log("updated", uniqueData);
    return uniqueData;
  } catch (error) {
    console.log(error);
    throw error?.response?.data?.error;
  }
};
