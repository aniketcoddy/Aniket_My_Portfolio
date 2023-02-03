import React,{useState} from 'react'
import { Link} from 'react-scroll'
export default function Menu() {

             const[open , setOpen] = useState(false) 
             
             const sidebar='mt-[11px] ml-[-134px] bg-[#1c232d] h-[327px] w-[182px] items-center flex flex-col absolute hidden transition-all duration-[1s]'
             const sidebaropen = "mt-[11px] ml-[-134px] bg-[#1c232d] h-[327px] w-[182px] items-center flex flex-col absolute visible duration-[1s]"

          const toggleSidebar = ()=>{
            setOpen((prevState) => !prevState)
          }

  return (
    <div>
    <div>
     <a onClick={toggleSidebar}><img src="menu-line.png" className='w-[38px] h-[34px] hover:cursor-pointer'/></a> 
    </div>
       
      <ul className={open?sidebaropen:sidebar}>
      <Link spy={true} smooth={true} offset={-50} duration={1000}  to="Home"><li className="text-[24px]  font-[Poppins] text-[white] border-b-[0.2px] border-solid border-[rgba(255,255,255,0.1)] h-[65px] flex pl-[51px] pt-[14px] w-[182px] hover:bg-[#027379] cursor-pointer">Home</li></Link>
       <Link spy={true} smooth={true} offset={-10} duration={1000}  to="About"><li  className="text-[24px] font-[Poppins] text-[white] border-b-[0.2px] border-solid border-[rgba(255,255,255,0.1)] h-[65px] flex pl-[51px]  pt-[13px] w-[182px] hover:bg-[#027379] cursor-pointer">About</li></Link>
       <Link spy={true} smooth={true} offset={-50} duration={1000}  to="Projects"><li  className="text-[24px] font-[Poppins] text-[white] border-b-[0.2px] border-solid border-[rgba(255,255,255,0.1)] h-[65px] flex pl-[46px]  pt-[14px] w-[182px] hover:bg-[#027379] cursor-pointer">Portfolio</li></Link>
       <Link spy={true} smooth={true} offset={-180} duration={1000}  to="Testimonials"><li  className="text-[24px] font-[Poppins] text-[white] border-b-[0.2px] border-solid border-[rgba(255,255,255,0.1)] h-[65px] flex pl-[15px]  pt-[13px] w-[182px] hover:bg-[#027379] cursor-pointer">Testimonials</li></Link>
       <Link spy={true} smooth={true} offset={-10} duration={1000}  to="contacts"><li  className="text-[24px] font-[Poppins] text-[white] border-b-[0.2px] border-solid border-[rgba(255,255,255,0.1)] h-[65px] flex pl-[42px]  pt-[14px] w-[182px] hover:bg-[#027379] cursor-pointer">Contact</li></Link>
      </ul>
      </div>
  )
}