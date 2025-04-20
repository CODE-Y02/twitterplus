import { ReactNode } from "react";

const Aside = ({ children }: { children: ReactNode }) => {
  return (
    <div className="ring-1 ring-white/50 shadow-md shadow-white/50 rounded-2xl my-5 w-md sticky top-3 max-h-screen overflow-y-scroll p-4 hidden lg:block ">
      {children}
    </div>
  );
};

export default Aside;
