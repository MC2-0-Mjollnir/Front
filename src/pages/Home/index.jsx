import React from "react";
import Navbar from "../../components/Home/Navbar";
import HomeContent from "../../components/Home/HomeContent";

const HomePage = () => {
  return (
    <div className="bg-[url('/public/images/Home/background.png')] bg-cover bg-center">
      <Navbar />
      <HomeContent />
    </div>
  );
};

export default HomePage;
