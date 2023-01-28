import React, { useState } from "react";
import { Link} from 'react-scroll'
export default function Navbar() {
  const [navbar, setNavBar] = useState(false);
  const [section , setSection] = useState(0)

  const Inactive =
    "flex flex-row w-[1536px] h-[67px] left-0 top-0  items-center bg-[#1c232d] sticky shadow-2xl z-10";
  const active =
    "flex flex-row w-[1536px] h-[67px] left-0 top-0  items-center bg-[#1c232d] sticky shadow-2xl shadow-[#00ADB5] z-50";
  const activeButton = "text-[#00ADB5] text-[17px] absolute font-[Poppins] font-normal p-2 rounded-[25px] border-2 border-[#00ADB5] hover:text-[20px] cursor-pointer";
  const InactiveButton =
    "text-[#EEEEEE] text-[17px] font-[Poppins] absolute font-normal   hover:text-[20px] cursor-pointer";

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
      <h1 className="text-[#EEEEEE] ml-[48px] text-[28px] items-center ">
        My Porfolio
      </h1>
      <ul className="flex flex-row ml-[59px] mt-[3px] absolute  items-center  ">
       <Link className={section == 1?activeButton:InactiveButton} onClick={()=>{setSection(1)}} to="Home" spy={true} smooth={true} offset={-150} duration={700} style={{marginLeft: "196px"}}>
          <li>Home</li>
        </Link>

       <Link className={section == 2?activeButton:InactiveButton} onClick={()=>{setSection(2)}} to="About" spy={true} smooth={true} offset={-10} duration={700} style={{ marginLeft: "301px" }}>
          <li >About</li>
        </Link>
       <Link className={section == 3?activeButton:InactiveButton} onClick={()=>{setSection(3)}} to="Projects" spy={true} smooth={true} offset={-70} duration={700} style={{ marginLeft: "393px" }} >
          <li >Portfolio</li>
        </Link>
       <Link className={section == 4?activeButton:InactiveButton} onClick={()=>{setSection(4)}} to="Testimonials"  spy={true} smooth={true} offset={-200} duration={700} style={{ marginLeft: "499px" }}>
          
          <li >Testimonials</li>
        </Link>
       <Link className={section == 5?activeButton:InactiveButton} onClick={()=>{setSection(5)}} to="contacts"  spy={true} smooth={true} offset={-15} duration={700} style={{ marginLeft: "637px" }}>
          <li>Contact</li>
        </Link>
      </ul>
     <Link
        to="Social"
        className="flex flex-row items-center pt-[5px] ml-[1160px] pl-[9px] w-[109px] h-[39px] bg-[#00ADB5] rounded-[24px]  top-[0px]  hover:bg-[#3b7477] cursor-pointer" onClick={()=>{setSection(0)}} spy={true} smooth={true} offset={130} duration={700}
      >
        <h2 className="text-[#FFFFFF] text-[18px]  w-[90px] h-[27px]   font-[Roboto]  font-normal text-center top-[7px] ">
          Lets Talk
        </h2>
      </Link>
    </div>
  );
}
