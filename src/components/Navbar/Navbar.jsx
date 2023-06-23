import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="backdrop-blur-3xl rounded-l-lg">
      <nav className="flex flex-col w-20 m-5">
        <NavLink to="/profile" className="text-sm font-medium  hover:text-blue-600 md:ml-2">
          Profile
        </NavLink>
        <NavLink to="/messagies" className="text-sm font-medium  hover:text-blue-600 md:ml-2">
          Messagies
        </NavLink>
        <NavLink to="/news" className=" text-sm font-medium  hover:text-blue-600 md:ml-2">
          News
        </NavLink>
        <NavLink to="/music" className=" text-sm font-medium  hover:text-blue-600 md:ml-2">
          Music
        </NavLink>
        <NavLink to="/settings" className="mt-72 text-sm font-medium  hover:text-blue-600 md:ml-2">
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
