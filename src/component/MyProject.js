import React from 'react'
import ProjectCard from './ProjectCard'

export default function MyProject() {

    const myStyle={
        backgroundImage: "url(/Projects.png)",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

  return (
    <div  className='top-[1637px] relative ' style={myStyle} >
      <div className='flex flex-row gap-[20px] top-[53px] left-[43px] absolute '>
      <h1 className='font-[Poppins] text-[60px] text-[#EEEEEE] font-bold'>My</h1>
      <h1 className='font-[Poppins] text-[60px] text-[#00ADB5] font-bold'>Portfolio</h1>
      </div>
       <div className='flex flex-row flex-wrap w-[1675px] h-[500px] left-[-214px] gap-[30px] top-[-53px] absolute'>
       <ProjectCard/>
       <ProjectCard/>
       <ProjectCard/>
       <ProjectCard/>
       </div>
    </div>
  )
}
