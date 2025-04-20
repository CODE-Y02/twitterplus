import SearchModal from "@/components/modals/SearchModal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

function Header() {
  return (
    <div className="p-4 border-b-2 border-white/20  static top-0">
      <div className="flex items-center justify-between">
        <SearchModal>
          <div className="bg-slate-800 inline-flex items-center px-3 py-1 md:w-md rounded-2xl">
            <Input
              disabled
              placeholder="Search"
              className="border-none ring-0 active:border-0 hover:border-0 focus-visible:ring-0 focus:ring-0 text-white placeholder:text-white"
            />
            <SearchIcon className="mr-3" />
          </div>
        </SearchModal>

        <div className="">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>img</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}

export default Header;
