import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function TestCards() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    draggable:true,
    autoplaySpeed:3000,
    arrows:false
  };

  return (
    <div className="w-[438px]">
      <Slider {...settings} >
        <div className=" w-[437px] h-[194px]  bg-[rgba(57,62,70,0.5)] flex flex-row backdrop-blur-sm rounded-[20px]">
          <img
            src="991982.png"
            className="w-[73px] h-[71px] ml-[21px] mt-[-18px]"
          />
          <h1 className="text-[white] text-[12px] font-[Poppins] font-normal ml-[23px] w-[393px] h-[50px] ">
            A text is a passage of words that conveys a set of meanings to the
            person who is reading it. It's a body of written work, in various
            forms and structures, that can be words, phrases and sentences that
            piece together a passage of written work.
          </h1>

          <div className="ml-[48px] mt-[22px]">
            <img
              src="testimg.jpg"
              className=" w-[30px] h-[30px] rounded-[40px] mt-[49px] ml-[-25px]"
            />
            <h1 className="text-[white] w-[139px] h-[50px] font-[Poppins] text-[12px] mt-[-28px] ml-[13px] font-normal ">
              Jane Cooper
            </h1>
            <p className="text-[white] w-[139px] h-[50px] text-[8px] font-[Poppins] mt-[-32px] ml-[12px] font-normal ">
              Advertising Designer
            </p>
          </div>
        </div>
        <div className=" w-[437px] h-[194px]  bg-[rgba(57,62,70,0.5)] flex flex-row backdrop-blur-sm rounded-[20px]">
          <img
            src="991982.png"
            className="w-[73px] h-[71px] ml-[21px] mt-[-18px]"
          />
          <h1 className="text-[white] text-[12px] font-[Poppins] font-normal ml-[23px] w-[393px] h-[50px] ">
            A text is a passage of words that conveys a set of meanings to the
            person who is reading it. It's a body of written work, in various
            forms and structures, that can be words, phrases and sentences that
            piece together a passage of written work.
          </h1>

          <div className="ml-[48px] mt-[22px]">
            <img
              src="testimg.jpg"
              className=" w-[30px] h-[30px] rounded-[40px] mt-[49px] ml-[-25px]"
            />
            <h1 className="text-[white] w-[139px] h-[50px] font-[Poppins] text-[12px] mt-[-28px] ml-[13px] font-normal ">
              Jane Cooper
            </h1>
            <p className="text-[white] w-[139px] h-[50px] text-[8px] font-[Poppins] mt-[-32px] ml-[12px] font-normal ">
              Advertising Designer
            </p>
          </div>
        </div>
        <div className=" w-[437px] h-[194px]  bg-[rgba(57,62,70,0.5)] flex flex-row backdrop-blur-sm rounded-[20px]">
          <img
            src="991982.png"
            className="w-[73px] h-[71px] ml-[21px] mt-[-18px]"
          />
          <h1 className="text-[white] text-[12px] font-[Poppins] font-normal ml-[23px] w-[393px] h-[50px] ">
            A text is a passage of words that conveys a set of meanings to the
            person who is reading it. It's a body of written work, in various
            forms and structures, that can be words, phrases and sentences that
            piece together a passage of written work.
          </h1>

          <div className="ml-[48px] mt-[22px]">
            <img
              src="testimg.jpg"
              className=" w-[30px] h-[30px] rounded-[40px] mt-[49px] ml-[-25px]"
            />
            <h1 className="text-[white] w-[139px] h-[50px] font-[Poppins] text-[12px] mt-[-28px] ml-[13px] font-normal ">
              Jane Cooper
            </h1>
            <p className="text-[white] w-[139px] h-[50px] text-[8px] font-[Poppins] mt-[-32px] ml-[12px] font-normal ">
              Advertising Designer
            </p>
          </div>
        </div>
        <div className=" w-[437px] h-[194px]  bg-[rgba(57,62,70,0.5)] flex flex-row backdrop-blur-sm rounded-[20px]">
          <img
            src="991982.png"
            className="w-[73px] h-[71px] ml-[21px] mt-[-18px]"
          />
          <h1 className="text-[white] text-[12px] font-[Poppins] font-normal ml-[23px] w-[393px] h-[50px] ">
            A text is a passage of words that conveys a set of meanings to the
            person who is reading it. It's a body of written work, in various
            forms and structures, that can be words, phrases and sentences that
            piece together a passage of written work.
          </h1>

          <div className="ml-[48px] mt-[22px]">
            <img
              src="testimg.jpg"
              className=" w-[30px] h-[30px] rounded-[40px] mt-[49px] ml-[-25px]"
            />
            <h1 className="text-[white] w-[139px] h-[50px] font-[Poppins] text-[12px] mt-[-28px] ml-[13px] font-normal ">
              Jane Cooper
            </h1>
            <p className="text-[white] w-[139px] h-[50px] text-[8px] font-[Poppins] mt-[-32px] ml-[12px] font-normal ">
              Advertising Designer
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
