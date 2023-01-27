import React from "react";
import TestCards from "./TestCards";
export default function Testimonial() {

  
  return (
    
    
      <div className="lg:top-[1800px] h-[776px]  flex lg:flex-row flex-col"  id="Testimonials">
        <img
          src="testimonial.png"
          className="lg:w-[1032px] lg:left-[120px] lg:top-[30px] w-[624px] h-[384px] lg:h-[546px] ml-[-34px] mt-[64px]"
        />
        <div className="lg:top-[377px] lg:left-[-145px] gap-[15px] ml-[23px] mt-[25px] lg:gap-[22px] font-bold flex relative">
          <h1 className="font-[Poppins] text-[32px] lg:text-[60px] text-[#EEEEEE] font-bold">
            Client
          </h1>
          <h1 className="font-[Poppins] text-[32px] lg:text-[60px] text-[#00ADB5] font-bold">
            Testimonials
          </h1>
        </div>
        <div className=" w-[439px] h-[194px] lg:top-[48px] lg:right-[1282px] relative rounded-[20px]">
        <TestCards />
        </div>
          
      </div>
   
  );
}
