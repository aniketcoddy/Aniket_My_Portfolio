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
    draggable: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="lg:w-[438px] w-[315px] mt-[-453px] ml-[31px]">
      <Slider {...settings} >
      <div className=" relative lg:w-[437px] w-[287px] h-[153px] lg:h-[194px] top-[0px] ml-[23px] bg-[rgba(57,62,70,0.5)] flex flex-row backdrop-blur-sm rounded-[20px]">
        <img
          src="991982.png"
          className="w-[73px] h-[71px] mt-[-14px] ml-[14px] lg:left-[30px] lg:top-[-8px] absolute"
        />
        <h1 className="text-[white] text-[9px] lg:text-[12px] font-[Poppins] ml-[14px] mt-[39px]  font-normal lg:left-[29px] lg:top-[47px] w-[258px] lg:w-[393px] h-[50px] absolute">
          A text is a passage of words that conveys a set of meanings to the
          person who is reading it. It's a body of written work, in various
          forms and structures, that can be words, phrases and sentences that
          piece together a passage of written work.
        </h1>

        <div>
          <img
            src="testimg.jpg"
            className=" w-[30px] h-[30px] rounded-[40px] mt-[117px] ml-[14px] lg:left-[29px] lg:top-[150px] absolute"
          />
          <h1 className="text-[white] w-[139px] h-[50px] mt-[-30px] ml-[-16px] font-[Poppins] text-[12px] font-normal top-[150px] left-[66px] absolute">
            Jane Cooper
          </h1>
          <p className="text-[white] w-[139px] h-[50px] text-[6px]  lg:text-[8px] font-[Poppins] font-normal mt-[136px] ml-[51px] lg:top-[168px] lg:left-[66px] absolute">
            Advertising Designer
          </p>
        </div>
      </div>
      <div className=" relative lg:w-[437px] w-[287px] h-[153px] lg:h-[194px] top-[0px] ml-[23px] bg-[rgba(57,62,70,0.5)] flex flex-row backdrop-blur-sm rounded-[20px]">
        <img
          src="991982.png"
          className="w-[73px] h-[71px] mt-[-14px] ml-[14px] lg:left-[30px] lg:top-[-8px] absolute"
        />
        <h1 className="text-[white] text-[9px] lg:text-[12px] font-[Poppins] ml-[14px] mt-[39px]  font-normal lg:left-[29px] lg:top-[47px] w-[258px] lg:w-[393px] h-[50px] absolute">
          A text is a passage of words that conveys a set of meanings to the
          person who is reading it. It's a body of written work, in various
          forms and structures, that can be words, phrases and sentences that
          piece together a passage of written work.
        </h1>

        <div>
          <img
            src="testimg.jpg"
            className=" w-[30px] h-[30px] rounded-[40px] mt-[117px] ml-[14px] lg:left-[29px] lg:top-[150px] absolute"
          />
          <h1 className="text-[white] w-[139px] h-[50px] mt-[-30px] ml-[-16px] font-[Poppins] text-[12px] font-normal top-[150px] left-[66px] absolute">
            Jane Cooper
          </h1>
          <p className="text-[white] w-[139px] h-[50px] text-[6px]  lg:text-[8px] font-[Poppins] font-normal mt-[136px] ml-[51px] lg:top-[168px] lg:left-[66px] absolute">
            Advertising Designer
          </p>
        </div>
      </div>
      <div className=" relative lg:w-[437px] w-[287px] h-[153px] lg:h-[194px] top-[0px] ml-[23px] bg-[rgba(57,62,70,0.5)] flex flex-row backdrop-blur-sm rounded-[20px]">
        <img
          src="991982.png"
          className="w-[73px] h-[71px] mt-[-14px] ml-[14px] lg:left-[30px] lg:top-[-8px] absolute"
        />
        <h1 className="text-[white] text-[9px] lg:text-[12px] font-[Poppins] ml-[14px] mt-[39px]  font-normal lg:left-[29px] lg:top-[47px] w-[258px] lg:w-[393px] h-[50px] absolute">
          A text is a passage of words that conveys a set of meanings to the
          person who is reading it. It's a body of written work, in various
          forms and structures, that can be words, phrases and sentences that
          piece together a passage of written work.
        </h1>

        <div>
          <img
            src="testimg.jpg"
            className=" w-[30px] h-[30px] rounded-[40px] mt-[117px] ml-[14px] lg:left-[29px] lg:top-[150px] absolute"
          />
          <h1 className="text-[white] w-[139px] h-[50px] mt-[-30px] ml-[-16px] font-[Poppins] text-[12px] font-normal top-[150px] left-[66px] absolute">
            Jane Cooper
          </h1>
          <p className="text-[white] w-[139px] h-[50px] text-[6px]  lg:text-[8px] font-[Poppins] font-normal mt-[136px] ml-[51px] lg:top-[168px] lg:left-[66px] absolute">
            Advertising Designer
          </p>
        </div>
      </div>
      </Slider>
    </div>
  );
}
