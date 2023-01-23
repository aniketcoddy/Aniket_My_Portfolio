import React, { useState } from "react";
import { Link} from 'react-scroll'
export default function Navbar() {
  const [navbar, setNavBar] = useState(false);
  const [section , setSection] = useState(0)

  const Inactive =
    "flex flex-row w-[1536px] h-[67px] left-0 top-0 gap-[298px]  items-center bg-[#1c232d] sticky shadow-2xl z-10";
  const active =
    "flex flex-row w-[1536px] h-[67px] left-0 top-0 gap-[298px]  items-center bg-[#1c232d] sticky shadow-2xl shadow-[#00ADB5] z-50";
  const activeButton = "text-[#00ADB5] text-[17px] font-[Poppins] font-normal absolute p-2 rounded-[25px] border-2 border-[#00ADB5] hover:text-[20px] cursor-pointer";
  const InactiveButton =
    "text-[#EEEEEE] text-[17px] font-[Poppins] font-normal absolute  hover:text-[20px] cursor-pointer";

  const changeBackground = () => {
    if (window.scrollY > 100) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? active : Inactive}>
      <h1 className="text-[#EEEEEE] text-[28px] left-[71px] relative">
        My Porfolio
      </h1>
      <ul className="flex flex-row gap-[26px]  items-center relative top-[3.5px] left-[-177px]">
       <Link className={section == 1?activeButton:InactiveButton} onClick={()=>{setSection(1)}} to="Home" spy={true} smooth={true} offset={-150} duration={700}>
          <li>Home</li>
        </Link>

       <Link className={section == 2?activeButton:InactiveButton} onClick={()=>{setSection(2)}} to="About" spy={true} smooth={true} offset={-120} duration={700} style={{ left: "79px" }}>
          <li >About</li>
        </Link>
       <Link className={section == 3?activeButton:InactiveButton} onClick={()=>{setSection(3)}} to="Projects" spy={true} smooth={true} offset={-70} duration={700}  style={{ left: "156px" }}>
          <li >Portfolio</li>
        </Link>
       <Link className={section == 4?activeButton:InactiveButton} onClick={()=>{setSection(4)}} to="Testimonials" style={{ left: "254px" }} spy={true} smooth={true} offset={-225} duration={700}>
          <li >Testimonials</li>
        </Link>
       <Link className={section == 5?activeButton:InactiveButton} onClick={()=>{setSection(5)}} to="contacts" style={{ left: "386px" }} spy={true} smooth={true} offset={-130} duration={700}>
          <li>Contact</li>
        </Link>
      </ul>
     <Link
        to="Social"
        className="flex flex-row items-center pt-[10px] pl-[20px] w-[109px] h-[39px] bg-[#00ADB5] rounded-[24px] left-[615px] top-[0px] relative hover:bg-[#3b7477] cursor-pointer" onClick={()=>{setSection(0)}} spy={true} smooth={true} offset={130} duration={700}
      >
        <h2 className="text-[#FFFFFF] text-[18px]  w-[90px] h-[27px]   font-[Roboto] absolute font-normal text-center top-[7px] left-[8px]">
          Lets Talk
        </h2>
      </Link>
    </div>
  );
}
