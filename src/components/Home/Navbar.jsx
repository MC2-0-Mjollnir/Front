import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between min-h-[6rem] max-h-[8rem] px-[4rem] md:px-[7rem] ">
      <img className="max-w-[10rem]" src="/images/Home/Logo.svg" alt="Logo" />
      <ul className="flex gap-2 md:gap-10 items-center">
        <li>Home</li>
        <li>About Us</li>
        <li>Provide</li>
        <li className="flex gap-2">
          Property <img src="/images/Home/Polygon.svg" alt="Polygon" />
        </li>
      </ul>
      <button className="bg-mainColor text-white rounded-full px-5 min-h-[3rem]">
        Contact US
      </button>
    </div>
  );
};

export default Navbar;
