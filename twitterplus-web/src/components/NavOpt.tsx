import { ReactNode } from "react";
import { NavLink } from "react-router";

const NavOpt = ({
  children,
  href = "/",
}: {
  children: ReactNode;
  href?: string;
}) => (
  <NavLink
    to={href}
    className={({ isActive }) =>
      `p-2 hover:bg-gray-900 rounded-md text-lg shadow-2xl ${
        isActive
          ? "font-bold shadow-md shadow-white/50 ring-1 ring-white/50"
          : "font-light"
      }`
    }
  >
    {children}
  </NavLink>
);

export default NavOpt;
