import React from "react";

export default function social() {
  return (
    <div className=" flex flex-row">
      <div className="flex flex-row gap-[20px] absolute top-[3832px] left-[601px] justify-center">
        <a href="/"><img src="wassapp.png" className="w-[44px] h-[44px]  "/></a>
        <a href="/"><img src="linkid.png" className="w-[44px] h-[44px] "/></a>
        <a href="/"><img src="git11.png" className="w-[44px] h-[44px]  "/></a>
        <a href="/"><img src="twitter.png" className="w-[44px] h-[44px]  "/></a>
      </div>
      <div className="flex flex-row gap-[20px] absolute top-[3886px] left-[488px] justify-center">
        <h1 className="font-[Poppins]  text-[Black] font-normal">© Copyright 2023 - Developed by Aniket Vishnoi. All right reserved.</h1>
      </div>
    </div>
  );
}
