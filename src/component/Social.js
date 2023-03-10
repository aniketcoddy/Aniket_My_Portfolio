import React from "react";
import { useState } from "react";

export default function Social() {

  const [onhover , setOnHover] = useState(false)


  const handleMouseEnter=()=>{
       setOnHover(true)
  } 
  const handleMouseLeave=()=>{
       setOnHover(false)
  } 

  


  return (

    <div className=" flex flex-col ml-[-1182px]" >
      <div className="flex flex-row gap-[20px] justify-center" id="Social">
        <a href="https://wa.me/7302918014" target="_blank"><img src={onhover?"1753788.png":"wassapp.png"} className="w-[44px] h-[44px]" onMouseEnter={ handleMouseEnter} onMouseLeave={handleMouseLeave}/></a>
        <a href="https://www.linkedin.com/in/aniket-vishnoi-a19940221" target="_blank"><img src={onhover?"LinkedIn_icon_circle.svg.png":"linkid.png"} className="w-[44px] h-[44px] " onMouseEnter={ handleMouseEnter} onMouseLeave={handleMouseLeave}/></a>
        <a href="https://github.com/aniketcoddy" target="_blank"><img src={onhover?"GitHub-logo.png":"git11.png"} className={onhover?"w-[44px] h-[44px] ":"w-[44px] h-[44px]"}  onMouseEnter={ handleMouseEnter} onMouseLeave={handleMouseLeave}/></a>
        <a href="" target="_blank"><img src={onhover?"Symbol-Twitter.png":"twitter.png"} className="w-[44px] h-[44px]" onMouseEnter={ handleMouseEnter} onMouseLeave={handleMouseLeave}/></a>
      </div>
      <div className="flex flex-row gap-[20px] justify-center">
        <h1 className="font-[Poppins] text-[10px] text-[Black] font-normal">© Copyright 2023 - Developed by Aniket Vishnoi. All right reserved.</h1>
      </div>
    </div>
  );
}
