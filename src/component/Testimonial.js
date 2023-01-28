import React from "react";
import TestCards from "./TestCards";
export default function Testimonial() {

  
  return (
    
    
      <div className=" h-[576px] mt-[141px] ml-[83px] flex flex-row"  id="Testimonials">
        <img
          src="testimonial.png"
          className="w-[989px]  h-[546px] "
        />
        <div className=" gap-[22px] mt-[377px] ml-[-167px] font-bold flex ">
          <h1 className="font-[Poppins] text-[60px] text-[#EEEEEE] font-bold">
            Client
          </h1>
          <h1 className="font-[Poppins] text-[60px] text-[#00ADB5] font-bold">
            Testimonials
          </h1>
        </div>
        <div className=" w-[439px] h-[194px] mt-[18px] ml-[-1248px] rounded-[20px]">
        <TestCards />
        </div>
          
      </div>
   
  );
}
