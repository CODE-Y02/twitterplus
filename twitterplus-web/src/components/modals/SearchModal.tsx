import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

type Props = {
  children: ReactNode;
};

const SearchModal = ({ children }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogOverlay className="blur-4xl" />
      <DialogContent className="bg-black text-white px-3 py-4 top-[20vh] rounded-2xl">
        <DialogTitle className="p-0 hidden">Search</DialogTitle>
        <div className="ring-2 rounded-xl ring-purple-200/50 items-center px-3 flex m-6 bg-slate-800 ">
          <Input
            placeholder="Search"
            className="border-none ring-0 active:border-0 hover:border-0 focus-visible:ring-0 focus:ring-0 text-white placeholder:text-white"
          />
          <SearchIcon />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
