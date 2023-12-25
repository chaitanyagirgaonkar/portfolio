import React from 'react'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillMail } from 'react-icons/ai';

function Contact() {
    return (
        <div name='contact' className='w-screen h-screen  bg-gray-900 dark:bg-white text-white dark:text-black flex flex-col justify-center items-center'>
            <h3 className='text-teal-600 text-2xl text-center font-semibold mb:10  pt-40 lg:pt-0'>Get In Touch</h3>
            <h1 className='text-teal-600 text-5xl text-center font-semibold mb:10  pt-0 lg:pt-0'>Contact Me</h1>
            <div className='flex flex-col lg:flex-row border border-teal-600 p-5 rounded-3xl gap-5 text-teal-600 mt-10'>
                <div className='flex flex-row gap-2'>
                    <AiFillMail className='text-2xl text-white dark:text-gray-500' />
                    <p><a href="mailto:girgaonkar.chaitanya@gmail.com">girgaonkar.chaitanya@gmail.com</a></p>
                </div>
                <div className='flex flex-row gap-2 '>
                    <AiFillLinkedin className='text-2xl text-white dark:text-gray-500' />
                    <p> <a href="https://www.linkedin.com/in/chaitanya-girgaonkar-4576b4226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank" className=' cursor-pointer'>LinkedIn</a> </p>
                </div>
            </div>

        </div>
    )
}

export default Contact