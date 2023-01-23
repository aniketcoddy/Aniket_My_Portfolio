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

    <div className=" flex flex-row" >
      <div className="flex flex-row gap-[20px] absolute top-[3832px] left-[601px] justify-center" id="Social">
        <a href="https://wa.me/7302918014" target="_blank"><img src={onhover?"1753788.png":"wassapp.png"} className="w-[44px] h-[44px] absolute left-[16px]" onMouseEnter={ handleMouseEnter} onMouseLeave={handleMouseLeave}/></a>
        <a href="https://www.linkedin.com/in/aniket-vishnoi-a19940221" target="_blank"><img src={onhover?"LinkedIn_icon_circle.svg.png":"linkid.png"} className="w-[44px] h-[44px] absolute left-[77px]" onMouseEnter={ handleMouseEnter} onMouseLeave={handleMouseLeave}/></a>
        <a href="https://github.com/aniketcoddy" target="_blank"><img src={onhover?"GitHub-logo.png":"git11.png"} className={onhover?"w-[44px] h-[44px] absolute left-[135px]":"w-[44px] h-[44px] absolute left-[135px]"}  onMouseEnter={ handleMouseEnter} onMouseLeave={handleMouseLeave}/></a>
        <a href="" target="_blank"><img src={onhover?"Symbol-Twitter.png":"twitter.png"} className="w-[44px] h-[44px] absolute left-[196px]" onMouseEnter={ handleMouseEnter} onMouseLeave={handleMouseLeave}/></a>
      </div>
      <div className="flex flex-row gap-[20px] absolute top-[3886px] left-[488px] justify-center">
        <h1 className="font-[Poppins]  text-[Black] font-normal">© Copyright 2023 - Developed by Aniket Vishnoi. All right reserved.</h1>
      </div>
    </div>
  );
}
