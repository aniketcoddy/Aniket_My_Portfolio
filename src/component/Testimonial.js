import React from "react";
import TestCards from "./TestCards";
export default function Testimonial() {

  
  return (
    
    
      <div className=" h-[576px] w-[509px] md:h-[480px] md:w-[697px] lg:mt-[185px] lg:h-[526px] lg:w-[881px]  ml-[13px] md:ml-[87px] lg:ml-[67px] mt-[82px] flex md:flex-row flex-col"  id="Testimonials">
        <img
          src="testimonial.png"
          className="h-[353px] lg:h-[496px] xl:ml-[42px] "
        />
        <div className=" gap-[22px] mt-[11px] lg:mt-[372px] lg:ml-[-487px] ml-[14px] xl:ml-[-328px] md:mt-[277px] md:ml-[-342px] font-bold flex ">
          <h1 className="font-[Poppins] text-[32px] lg:text-[50px] text-[#EEEEEE] font-bold">
            Client
          </h1>
          <h1 className="font-[Poppins] text-[32px] lg:text-[50px] text-[#00ADB5] font-bold">
            Testimonials
          </h1>
        </div>
        <div className=" w-[388px] lg:w-[448px] h-[124px] mt-[-400px] md:mt-[12px] ml-[73px] lg:ml-[-746px] lg:mt-[16px] md:ml-[-512px] xl:ml-[-906px] rounded-[20px]">
        <TestCards />
        </div>
          
      </div>
   
  );
}
