import { useState } from "react";
import Cookies from 'js-cookie'
import { Link } from "react-router-dom";
import API from "../../utils/api-client";
import { toast } from "react-toastify";
import Spinner from "react-spinner-material";

const Navbar = () => {

  const [isLoading, setIsLoading] = useState(false);

  const SignOut = async () => {
    
    setIsLoading(true)
    
    try {
      await API.post('/users/logout')
      toast.success('Good bye', {
        position: "top-center",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      })

      Cookies.remove('connect.sid')
      location.reload();

    } catch (error) {
      toast.error('Error', {
        position: "top-center",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      })
    } finally {
      setIsLoading(false)
    }
  }

  console.log(!!Cookies.get('connect.sid'))

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
      {
        !!Cookies.get('connect.sid')
        ?
        <button className="bg-mainColor font-bold flex items-center text-white rounded-full px-5 min-h-[3rem]" onClick={SignOut}>{(isLoading ? <Spinner style={{height: "28px", width: "28px"}} color='white' /> : 'Logout')}</button>
        :
        <Link to={'/auth/login'} className="bg-mainColor font-bold flex items-center text-white rounded-full px-5 min-h-[3rem]">
          Login
        </Link>
      }
    </div>
  );
};

export default Navbar;
