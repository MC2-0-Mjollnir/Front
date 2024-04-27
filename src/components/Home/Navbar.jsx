import { useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import API from "../../utils/api-client";
import { toast } from "react-toastify";
import Spinner from "react-spinner-material";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);

  const SignOut = async () => {
    setIsLoading(true);

    try {
      await API.post("/users/logout");
      toast.success("Good bye", {
        position: "top-center",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });

      Cookies.remove("connect.sid");
      location.reload();
    } catch (error) {
      toast.error(error?.response?.message ?? "Error", {
        position: "top-center",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-between min-h-[6rem] max-h-[8rem] px-[4rem] md:px-[7rem] w-screen ">
      <Link to={'/'}><img className="max-w-[10rem]" src="/Logo.svg" alt="Logo" /></Link>
      {Cookies.get("connect.sid") ? (
        <ul className="flex gap-2 md:gap-10 items-center">
          <li className="flex transition-all hover:translate-y-1">
            <NavLink
              to="/user/projects"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Projects
            </NavLink>
          </li>
          <li className="flex transition-all hover:translate-y-1">
            <NavLink
              to="/user/upgrade"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Upgrade
            </NavLink>
          </li>
          <li className="flex transition-all hover:translate-y-1">
            <NavLink
              to="/user/support"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Support
            </NavLink>
          </li>
        </ul>
      ) : (
        <ul className="flex gap-2 md:gap-10 items-center">
          <li className="flex transition-all hover:translate-y-1">Home</li>
          <li className="flex transition-all hover:translate-y-1">About Us</li>
          <li className="flex transition-all hover:translate-y-1">Provide</li>
          <li className="flex gap-2 items-center transition-all hover:translate-y-1">
            Property <img src="/images/Home/Polygon.svg" alt="Polygon" />
          </li>
        </ul>
      )}

      {!!Cookies.get("connect.sid") ? (
        <button
          className="bg-mainColor font-bold flex items-center text-white rounded-full px-5 min-h-[3rem]"
          onClick={SignOut}
        >
          {isLoading ? (
            <Spinner style={{ height: "28px", width: "28px" }} color="white" />
          ) : (
            "Logout"
          )}
        </button>
      ) : (
        <Link
          to={"/auth/login"}
          className="bg-mainColor font-bold flex items-center text-white rounded-full px-5 min-h-[3rem]"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
