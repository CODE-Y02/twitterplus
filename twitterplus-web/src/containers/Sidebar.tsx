import { FaPlus, FaRegMessage, FaXTwitter } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { HiOutlineHome } from "react-icons/hi2";

import NavOpt from "@/components/NavOpt";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  return (
    <div className="lg:space-y-6 lg:py-6">
      {/* Logo */}
      <div className="p-4 px-8 text-2xl text-white hidden lg:block">
        <FaXTwitter />
      </div>

      <div className="p-3 flex-col flex lg:px-6 gap-4">
        <NavOpt href={"/"}>
          <div className="flex items-center justify-center xl:justify-start gap-3">
            <HiOutlineHome />
            <p className="hidden xl:inline">Home</p>
          </div>
        </NavOpt>

        <NavOpt href={"/explore"}>
          <div className="flex items-center justify-center xl:justify-start gap-3">
            <LuSearch />
            <p className="hidden xl:inline">Explore</p>
          </div>
        </NavOpt>

        <NavOpt href={"notifications"}>
          <div className="flex items-center justify-center xl:justify-start gap-3">
            <IoNotifications />
            <p className="hidden xl:inline">Notifications</p>
          </div>
        </NavOpt>

        <NavOpt href={"/dm"}>
          <div className="flex items-center justify-center xl:justify-start gap-3">
            <FaRegMessage />
            <p className="hidden xl:inline">Messages</p>
          </div>
        </NavOpt>

        <NavOpt href={"settings"}>
          <div className="flex items-center justify-center xl:justify-start gap-3">
            <MdOutlineSettings />
            <p className="hidden xl:inline">Settings</p>
          </div>
        </NavOpt>

        <Button variant={"secondary"} className="rounded-4xl text-lg ">
          <FaPlus />
          <p className="hidden xl:inline">New Post</p>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
