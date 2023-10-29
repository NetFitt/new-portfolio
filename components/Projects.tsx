"use client"
import { motion } from "framer-motion"
import Link from "next/link"

const Projects = () => {




  const projects = [{image:'mockup-oukla.png',title:'Oukla',description:'', link:'https://oukla.vercel.app'},
  {image:'mockup-khayrokom.png',title:'khayrokom',description:'',link:''}]
  return (
    <div 
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto 
      items-center z-0 '
      
    >
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl '>
        Projects
      </h3>
    
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar
       scrollbar-track-gray-400/20  scrollbar-thumb-main-color/90 ">
        {projects.map((project,index)=>(
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen  "
            key={index}
          
          >
            <Link href={`${project.link}`} target="_blank">
              <motion.img
                initial={{
                  y:-300,
                  opacity:0
                }}
                whileInView={{
                  opacity:1,
                  y:8
                }}
                whileHover={{
                  height:246
                }}
                transition={{
                  duration:0.7
                }}
          
                viewport={{
                  once:true
                }}
                src={`/${project.image}`}
                className="h-36 cursor-pointer md:h-56"
                alt="1"
              />
            </Link>
            <div>
              <h4>{project.title}</h4>
            </div>
            <p className="text-lg text-center md:text-left ">
              
            </p>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-main-color/10 left-0 h-[300px] -skew-y-12  ' />
      
    </div>
  )
}

export default Projects