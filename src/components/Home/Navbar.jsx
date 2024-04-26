import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between min-h-[6rem] max-h-[8rem] px-[4rem] md:px-[7rem] ">
      <img className="max-w-[10rem]" src="/Logo.svg" alt="Logo" />
      <ul className="flex gap-2 md:gap-10 items-center">
        <li>Home</li>
        <li>About Us</li>
        <li>Provide</li>
        <li className="flex gap-2 items-center">
          Property <img src="/images/Home/Polygon.svg" alt="Polygon" />
        </li>
      </ul>
      <Link to={'/auth/login'} className="bg-mainColor font-bold flex items-center text-white rounded-full px-5 min-h-[3rem]">
        Login
      </Link>
    </div>
  );
};

export default Navbar;
