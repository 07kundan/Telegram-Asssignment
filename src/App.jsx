import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import ChatSection from "./components/ChatSection/ChatSection";
import { useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";

function App() {
  const isOpen = useSelector((state) => state.chatSection.isOpen);
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <div className="sm:flex md:h-screen text-black dark:text-white  dark:bg-slate-900">
        <div className="md:hidden">
          {!isOpen && (
            <div className="w-full min-h-screen overflow-y-scroll sm:min-w-[35vw]">
              <Navbar />
              <Sidebar />
            </div>
          )}
        </div>

        <div className="hidden md:block w-[35vw]  min-h-full overflow-y-scroll custom-scrollbar bg-slate-200 dark:bg-slate-800">
          <Navbar />
          <Sidebar />
        </div>

        {isOpen ? (
          <div className="w-full overflow-y-scroll md:w-[65vw] custom-scrollbar">
            <ChatSection />
          </div>
        ) : (
          <div className="hidden w-full md:w-[65vw] md:flex items-center justify-center">
            <span className="border px-3 py-1 text-sm rounded-full bg-slate-300 dark:bg-slate-800">
              selet a chat to view messages
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
