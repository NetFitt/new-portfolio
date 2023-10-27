'use client'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
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
        className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center '>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-xl'>About</h3>

        <motion.img
            initial={{
                x:-200,
                opacity:0
            }}
            whileInView={{
                x:0,
                opacity:1
            }}
            transition={{
                duration:1.2
            }}
            viewport={{once:true}}
            src='/example.png'
            className='-mb-20 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-lg md:h-64 md:w-64'
        />
        <div className='space-y-10 md:px-10 px-0'>
            <h1 className='text-dxl font-semibold'>My Background</h1>
            <p className='text-sm '>
                Hi! I’m Mohamed Zerouali, a Web developer from algeria,
                bomeredes with 3 years of experience in Front end and back end development.

                I love Coding and enjoy Making new designes in my free time. This portfolio showcases some of my work and passion for Coding and designing. Let’s connect!
            </p>
        
        </div>
    </motion.div>
  )
}

export default About