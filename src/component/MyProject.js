import React from "react";
import ProjectCard from "./ProjectCard";
import Carousel from "better-react-carousel";

export default function MyProject() {
  const myStyle = {
    backgroundImage: "url(/Projects.png)",
    height: "100vh",
    marginTop: "334px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "",
  };

 

  const MyDot = ({ isActive }) => (
    <span
      style={{
        display: 'inline-block',
        height: isActive ? '12px' : '8px',
        width: isActive ? '12px' : '8px',
        background: isActive ?'#1890ff':'#EEEEEE',
        marginTop:'20px',
      }}
    ></span>
  )
  

  return (
    <div className="  " style={myStyle} id="Projects">
      <div className="flex flex-row gap-[20px] pt-[34px] ml-[43px] ">
        <h1 className="font-[Poppins] text-[60px] text-[#EEEEEE] font-bold">
          My
        </h1>
        <h1 className="font-[Poppins] text-[60px] text-[#00ADB5] font-bold">
          Portfolio
        </h1>
      </div>
      <div style={{width: "1304px",marginLeft: "134px"}}>
        <Carousel cols={2} rows={2} dot={MyDot} showDots={true}>
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
          <Carousel.Item>
            <ProjectCard />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
