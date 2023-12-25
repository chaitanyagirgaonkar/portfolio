import React from 'react'
import MyLottie from '../MyLottie'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { FaGraduationCap } from 'react-icons/fa'
function About() {

    return (
        <div name='about' className='w-screen h-screen bg-gray-900 text-white dark:bg-white dark:text-black'>
            <div className='h-[100px]'></div>
            <h1 className='text-teal-600 text-5xl text-center font-semibold mb:10'>About Me</h1>
            <div className='flex flex-col lg:flex-row justify-center gap-0'>
                <div className='m-auto lg:m-auto   lg:ml-40'>
                    <MyLottie />
                </div>
                <div >
                    <div className='text-white mt-0 lg:mt-10 w-80 lg:w-1/2 text-center m-auto dark:text-black'>
                        I am currently pursing Diploma Third year in information Technology. skilled in React,HTML , Javascript, C++, java. Have hungry to learn new technologies and frameworks. Learn technologies quickly, helping to shorten turnaround times. Through my coursework and personal projects, I have gained hands-on experience in developing web applications and software solutions.
                    </div>
                    <div className='flex flex-col lg:flex-row justify-center gap-5   items-center lg:gap-20 mt-10 lg:mt-10'>
                        <div className=' p-5 w-64 h-21 border border-teal-600 rounded-3xl  text-center flex flex-col justify-center gap-1 '>
                            <FaGraduationCap className='text-center  text-teal-600 items-center text-2xl m-auto mt-0 mb-0' />
                            <h1 className='text-1xl font-bold text-teal-600'>Education</h1>
                            <h4 className=' text-xs'>Diploma in IT</h4>
                            <h3 className=' text-xs'>Government Polytechnic Mumbai</h3>
                        </div>
                        <div className='p-5 w-64 h-21 border border-teal-600 rounded-3xl  text-center flex flex-col justify-center gap-1 '>
                            <FaGraduationCap className=' text-teal-600 text-center items-center text-2xl m-auto mt-0 mb-0' />
                            <h1 className='text-1xl font-bold text-teal-600'>Education</h1>
                            <h4 className=' text-xs'>SSC</h4>
                            <h3 className=' text-xs'>Maharshi Vidayala Aurangabad</h3>
                        </div>
                    </div>


                </div>

            </div>
        </div >
    )
}

export default About