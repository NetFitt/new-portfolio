"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const Projects = () => {
  const projects = [1,2,3,4]
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
            <motion.img
              initial={{
                y:-300,
                opacity:0
              }}
              whileInView={{
                opacity:1,
                y:8
              }}
              transition={{
                duration:1.2
              }}
        
              viewport={{
                once:true
              }}
              src='/nextJS.png'
              
              alt="1"
            />
            <div>
              <h4>Case Study 1 of 3: UPS clone</h4>
            </div>
            <p className="text-lg text-center md:text-left ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi corporis sapiente fugit magnam. Sint impedit nostrum totam ex porro quaerat suscipit obcaecati unde similique perferendis id, accusantium atque. Aliquid, ullam!
            </p>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-main-color/10 left-0 h-[300px] -skew-y-12  ' />
      
    </div>
  )
}

export default Projects