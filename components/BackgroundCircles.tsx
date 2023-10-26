"use client"
import { motion } from 'framer-motion'

function BackgroundCircles() {
  return (
    <motion.div className='relative flex justify-center items-center'
        initial={{
            opacity:0
        }}
        animate={{
            scale:[1,2,2,3,1],
            opacity:[0.1 ,0.2 ,0.4,0.8,0.1,1]
        }}
        transition={{
            duration:2.5
        }}
    >
        <div className='border absolute border-[#333333] rounded-full h-[200px] w-[200px] mt-48 animate-ping   '/>
        <div className='border absolute border-[#333333] rounded-full h-[400px] w-[400px] mt-48'/>
        <div className='border absolute border-[#333333] rounded-full h-[500px] w-[500px] mt-48'/>
        <div className='border absolute border-main-color rounded-full h-[600px] w-[600px] mt-48 animate-pulse opacity-20 '/>
        <div className='border absolute border-main-color rounded-full min-h-[800px] min-w-[800px] mt-48  opacity-20 '/>

    </motion.div>
  )
}

export default BackgroundCircles