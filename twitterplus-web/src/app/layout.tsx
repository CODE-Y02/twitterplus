import { Outlet } from "react-router";
import Sidebar from "../containers/Sidebar";
import Header from "@/containers/Header";

function Layout() {
  return (
    <div className="flex h-screen bg-black text-white">
      <div className="w-fit xl:w-[20vw] border-r-2 border-white/20 hidden md:block">
        <Sidebar />
      </div>

      {/* Content */}
      <div className="w-full flex flex-col h-screen ">
        <Header />

        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
