import React from "react";
import TestCards from "./TestCards";
export default function Testimonial() {

  
  return (
    
    
      <div className="top-[1800px] h-[576px] relative flex flex-row"  id="Testimonials">
        <img
          src="testimonial.png"
          className="w-[1032px] left-[120px] top-[30px] h-[546px] relative"
        />
        <div className="top-[377px] left-[-145px] gap-[22px] font-bold flex relative">
          <h1 className="font-[Poppins] text-[60px] text-[#EEEEEE] font-bold">
            Client
          </h1>
          <h1 className="font-[Poppins] text-[60px] text-[#00ADB5] font-bold">
            Testimonials
          </h1>
        </div>
        <div className=" w-[439px] h-[194px] top-[48px] right-[1282px] relative rounded-[20px]">
        <TestCards />
        </div>
          
      </div>
   
  );
}
