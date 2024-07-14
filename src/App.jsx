import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import ChatSection from "./components/ChatSection/ChatSection";
import { useSelector } from "react-redux";
function App() {
  const isOpen = useSelector((state) => state.chatSection.isOpen);
  return (
    <>
      <div className="text-white sm:flex">
        {!isOpen && (
          <div className="w-full min-h-full bg-zinc-700 overflow-y-scroll sm:min-w-[35vw]">
            <Navbar />
            <Sidebar />
          </div>
        )}

        {/* <Outlet /> */}

        {isOpen && (
          <div className="w-full bg-red-900 overflow-scroll">
            <ChatSection />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
