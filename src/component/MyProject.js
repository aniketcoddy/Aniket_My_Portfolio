import React from "react";
import ProjectCard from "./ProjectCard";
import Carousel from "better-react-carousel";

export default function MyProject() {
  const myStyle = {
    backgroundImage: "url(/Projects.png)",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "",
  };

  const MyDot = ({ isActive }) => (
    <span
      style={{
        display: "inline-block",
        height: isActive ? "12px" : "8px",
        width: isActive ? "12px" : "8px",
        background: isActive ? "#1890ff" : "#EEEEEE",
        marginTop: "20px",
      }}
    ></span>
  );

  return (
    <div className="mt-[256px] md:mt-[13px] lg:mt-[94px] h-fit" style={myStyle} id="Projects">
      <div className="flex flex-row gap-[20px] pt-[34px] sm:ml-[208px] md:ml-[248px] lg:ml-[38px]  ml-[43px] ">
        <h1 className="font-[Poppins] text-[46px] sm:text-[62] text-[#EEEEEE] font-bold">
          My
        </h1>
        <h1 className="font-[Poppins] text-[49px]  sm:text-[62] text-[#00ADB5] font-bold">
          Portfolio
        </h1>
      </div>

      <div className=" xl:hidden pb-[31px]">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

      <div
        className="hidden xl:block w-[1454px] ml-[-104px] pb-[31px]"
      >
        <Carousel cols={2} rows={2} dot={MyDot} loop showDots={true}>
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
