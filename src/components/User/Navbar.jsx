import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between min-h-[6rem] max-h-[8rem] px-[4rem] md:px-[7rem]">
      <img className="max-w-[10rem]" src="/Logo.svg" alt="" />
      <ul className="flex gap-2 md:gap-10 items-center">
        <li>
          <NavLink
            to="/user/projects"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/upgrade"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Upgrade
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/support"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Support
          </NavLink>
        </li>
      </ul>
      <img src="/images/User/profile.svg" alt="profile" />
    </div>
  );
};

export default Navbar;
