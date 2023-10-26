'use client'
import React from 'react'
import { motion } from 'framer-motion'


type props = {
    directionLeft?:boolean,
    percentage:String,
    image:String
}

function Skill({directionLeft,percentage,image}:props) {
    return (
        <div className='group relative flex cursor-pointer'>
            
        
            <motion.img 
                initial={{
                    opacity:0,
                    x:directionLeft ? -40 : 40 
                }}
                whileInView={{
                    opacity:1,
                    x:0
                }}
                transition={{
                    duration:1.2
                }}
                src={`${image}`}
                onError={() => console.log("Image failed to load")}
                className='border-gray-500 border rounded-full object-cover w-16 h-16  lg:w-20 lg:h-20 filter group-hover:grayscale transition
                duration-300 ease-in-out'
            />

            <motion.div 
                initial={{
                    x:directionLeft ? -40 : 40
                }}
                whileInView={{
                    x:0
                }}
                transition={{
                    duration:1.2
                }}
            
            
            className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16  
            lg:w-20 lg:h-20 rounded-full '
                
            >
            <div className='flex items-center justify-center h-full'>
                    <p className='text-2xl font-bold text-black opacity-100'>{percentage}</p>
                </div>
            </motion.div>
        </div> 
    )
}

export default Skill