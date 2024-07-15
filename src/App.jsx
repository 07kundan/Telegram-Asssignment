import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import ChatSection from "./components/ChatSection/ChatSection";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const isOpen = useSelector((state) => state.chatSection.isOpen);
  return (
    <>
      <div className="text-white sm:flex md:h-screen bg-slate-900">
        <div className="md:hidden">
          {!isOpen && (
            <div className="w-full min-h-full bg-slate-900 overflow-y-scroll sm:min-w-[35vw]">
              <Navbar />
              <Sidebar />
            </div>
          )}
        </div>

        <div className="hidden md:block w-[35vw] bg-slate-800 min-h-full overflow-y-scroll custom-scrollbar">
          <Navbar />
          <Sidebar />
        </div>

        {isOpen ? (
          <div className="w-full overflow-y-scroll md:w-[65vw] custom-scrollbar">
            <ChatSection />
          </div>
        ) : (
          <div className="w-full md:w-[65vw] flex items-center justify-center">
            <span className="border px-3 py-1 text-sm rounded-full bg-slate-800">
              selet a chat to view messages
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
