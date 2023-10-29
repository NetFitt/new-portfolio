"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

const Skills = () => {
    const data = [{percentage:"88%", dirction:false ,image:"/figma.png"},
    {percentage:"96%", dirction:false ,image:"/CSS.png"},
    {percentage:"100%", dirction:false ,image:"/html.png"},
    {percentage:"85%", dirction:false ,image:"/javascript.png"},
    {percentage:"80%", dirction:false ,image:"/php.png"},
    {percentage:"90%", dirction:false ,image:"/ts.png"},
    {percentage:"96%", dirction:true ,image:"/tail.png"},
    {percentage:"97%", dirction:true ,image:"/materialui.png"},
    {percentage:"87%", dirction:true ,image:"/nextJS.png"},
    {percentage:"75%", dirction:true ,image:"/illustrator.png"},
    {percentage:"75%", dirction:true ,image:"/photoshop.png"},
    {percentage:"96%", dirction:true ,image:"/express.png"},
    {percentage:"96%", dirction:true ,image:"/node.png"},
   ]



    return (
        <motion.div
            initial={{
                opacity:0, 
            }}
            whileInView={{
                opacity:1
            }}
            transition={{
                duration:1.6
            }}
            className='flex  flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen 
            xl:space-y-0 mx-auto items-center justify-center xl:space-x-0 '
        >
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-center text-xl'>Skill's</h3>
            <h3 className='absolute top-32 uppercase text-sm text-gray-500 tracking-[3px] '>Hover over the skills for display proficiency</h3>
            <div className='grid md:grid-cols-5 grid-cols-4 gap-4'>
                {data.map((ele,index)=>(
                    <Skill key={index} percentage={ele.percentage} directionLeft={ele.dirction} image={ele.image}/>
                ))}
                
            </div>
        
        
        </motion.div>
    )
}

export default Skills