import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory scrollbar scrollbar-track-gray-400/20
     scrollbar-thumb-main-color/90 z-0 overflow-y-scroll overflow-x-hidden' >
      {/* header */}

      <Header/>

      
      <section id='hero' className='snap-start'>
        <Hero/>
      </section>

      <section id='about' className='snap-center'>
        <About/>
      </section>

      <section id='skills' className='snap-start'>
        <Skills/>
      </section>

      <section id='projects'  className='snap-center'>
        <Projects/>
      </section>

      <section id='contact' className='snap-start'>
        <Contact/>
      </section>
      <Link href='#hero'>
        <footer className='sticky bottom-4 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <Image
              src='/logo.png'
              alt='p'
              width={35}
              height={35}
              className='rounded-full filter grayscale hover:grayscale-0 cursor-pointer '
            />
          </div>
        </footer>
      </Link>
      
    </main>
  )
}
