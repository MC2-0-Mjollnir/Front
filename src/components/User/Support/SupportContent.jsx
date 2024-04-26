import React from "react";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";

const SupportContent = () => {
  return (
    
    <div className="w-screen flex flex-col items-center gap-16 my-16">
      <h1 className="text-[3rem] capitalize font-bold text-[#0B3558]">
        Let’s keep in touch
      </h1>
      <div className="flex flex-col imtes-center gap-16">
        <div className="flex gap-16">
          <div className="flex gap-8 items-center">
            <img src="./Instagram.png" alt="" />
            <p>la_bengherbia@esi.dz</p>
          </div>
          <div className="flex gap-8 items-center">
            <img src="./x.png" alt="" />
            <p>la_bengherbia@esi.dz</p>
          </div>
        </div>
        <div className="flex gap-16">
          <div className="flex gap-8 items-center">
            <img src="./Facebook.png" alt="" />
            <p>la_bengherbia@esi.dz</p>
          </div>
          <div className="flex gap-8 items-center">
            <img src="./Gmail.png" alt="" />
            <p>la_bengherbia@esi.dz</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportContent;
