import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import ChatSection from "./components/ChatSection/ChatSection";
import { useSelector } from "react-redux";
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

        <div className="hidden md:block w-[35vw] bg-slate-800 min-h-full overflow-y-scroll">
          <Navbar />
          <Sidebar />
        </div>

        {isOpen && (
          <div className="w-full overflow-y-scroll md:w-[65vw] ">
            <ChatSection />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
