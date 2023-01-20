import React from "react";
import ProjectCard from "./ProjectCard";
import Carousel from "better-react-carousel";

export default function MyProject() {
  const myStyle = {
    backgroundImage: "url(/Projects.png)",
    height: "100vh",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
  };

  const style = {
    top: " 111px",
    width: "1407px",
    height: " 499px",
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
    <div className="top-[1637px] relative " style={myStyle} id="Projects">
      <div className="flex flex-row gap-[20px] top-[0px] left-[43px] absolute ">
        <h1 className="font-[Poppins] text-[60px] text-[#EEEEEE] font-bold">
          My
        </h1>
        <h1 className="font-[Poppins] text-[60px] text-[#00ADB5] font-bold">
          Portfolio
        </h1>
      </div>
      <div style={{top:"86px",position:"relative",width: "1382px"}}>
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
