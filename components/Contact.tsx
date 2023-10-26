'use client'
import {PhoneIcon,MapIcon,EnvelopeIcon  } from '@heroicons/react/24/solid'
import {useForm , SubmitHandler} from 'react-hook-form'

type Inputs = {
    name : String,
    email: String,
    subject: String,
    message: String
}


function Contact() {
    const {register,handleSubmit} = useForm<Inputs>()
    const onSubmit:SubmitHandler<Inputs> = (formData)=> {
        console.log(formData);
        
    };
    

    return (
        <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-6xl 
        justify-evenly px-20 items-center pt-20 mx-auto overflow-hidden'>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl '>
                Contact 
            </h3>
            <div className='flex flex-col space-y-5'>
                <h4 className='text-2xl md:text-3xl font-semibold text-center '>
                    i got just what u need.{""}
                    <span className='decoration-main-color/50  underline'>Let's talk</span>
                </h4>
                <div className='space-y-5'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-main-color h-5 w-5 md:w-7 md:h-7 animate-pulse'/>
                        <p className='text-lg md:text-xl'>+213 795573015</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapIcon className='text-main-color h-5 w-5 md:w-7 md:h-7 animate-pulse'/>
                        <p className='text-lg md:text-xl '>Boumerdes, Baghlia</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-main-color h-5 w-5 md:w-7 md:h-7 animate-pulse'/>
                        <p className='text-lg md:text-xl '>mohamedzerouali203@gmail.com</p>
                    </div>
                </div>
                <form className='flex flex-col space-y-2 w-[400px] md:w-fit mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex space-x-2 w-[400px] md:w-auto '>
                        <input className='contactInput w-[50%] ' {...register('name')} placeholder='Name' type="text" />
                        <input className='contactInput w-[50%]' {...register('email')} placeholder='Email' type="email" />
                    </div>
                    <input className='contactInput' {...register('subject')} placeholder='Subject' type='text'/>
                    <textarea className='contactInput' {...register('message')} placeholder='Message'/>
                    <button className='bg-main-color py-3 px-10 rounded-md text-black font-bold text-xl' type='submit'>Submit</button>
                </form>
            </div>
           
        </div>
    )
}

export default Contact