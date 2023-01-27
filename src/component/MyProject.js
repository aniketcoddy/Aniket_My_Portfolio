import React from "react";
import ProjectCard from "./ProjectCard";
import Carousel from "better-react-carousel";

export default function MyProject() {
  const myStyle = {
    backgroundImage: "url(/Projects.png)",
  
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
  };




  const MyDot = ({ isActive }) => (
    <span
      style={{
        display: 'inline-block',
        height: isActive ? '12px' : '8px',
        width: isActive ? '12px' : '8px',
        background: isActive ?'#1890ff':'#EEEEEE',
        marginTop:'20px',
        left:"10px",
       position:"relative"
      }}
    ></span>
  )
  

  return (
    <div className="lg:top-[1637px] w-[360px] lg:w-[1530px] mt-[170px] h-fit" style={myStyle} id="Projects">
      <div className="flex flex-row gap-[20px] pt-[34px] top-[0px] left-[43px] absolute ">
        <h1 className="font-[Poppins] text-[48px] text-[#EEEEEE] font-bold">
          My
        </h1>
        <h1 className="font-[Poppins] text-[48px] text-[#00ADB5] font-bold">
          Portfolio
        </h1>
      </div>


      <div className="lg:hidden mt-[150px] pt-[124px] pb-[10px]">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
      </div>
     
      <div className="hidden lg:block t-[86px] relative w-[1382px]">
        <Carousel cols={2} rows={2} dot={MyDot} showDots={true} >
          <Carousel.Item>
            <ProjectCard />
          </Carousel.Item>
          <Carousel.Item>
            <ProjectCard />
          </Carousel.Item>
          <Carousel.Item>
            <ProjectCard />
          </Carousel.Item>
          <Carousel.Item>
            <ProjectCard />
          </Carousel.Item>
        </Carousel>
      </div>
      
    </div>
  );
}
