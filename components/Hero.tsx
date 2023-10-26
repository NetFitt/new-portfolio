'use client'

import {Cursor , useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
    const [text , count] = useTypewriter({
        words:["Hi, the name's zerouali mohamed","Developer","Designer","creater"],
        loop:true,
        delaySpeed:2000

    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden z-23'>
            <BackgroundCircles/>
            
            <Image
                className='relative rounded-full mx-auto object-cover'
                src='/example.png'
                width={100}
                height={100}
                alt='profile pic'
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>WEB Developer</h2>
                <h1 className='text-3xl lg:text-4xl font-semibold px-10'>
                    <span>{text}</span>
                    <Cursor cursorColor=''/>
                </h1>
                <div className='pt-4'>
                    <Link href='#about'>
                        <button className='hero_btns'>About</button>
                    </Link>
                    <Link href='#skills'>
                        <button className='hero_btns'>Skill's</button>
                    </Link>
                    <Link href='#projects'>
                        <button className='hero_btns'>Project's</button>
                    </Link>
                    <Link href='#contact'>
                        <button className='hero_btns'>Contact</button>
                    </Link>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Hero