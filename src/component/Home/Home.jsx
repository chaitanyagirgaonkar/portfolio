import React from 'react';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { HiArrowRight } from 'react-icons/hi';
import deved from '../../../public_pro/dev.png';
import { Link } from 'react-scroll'
import resume from '../Header/resume.pdf'

function Home() {
    return (
        <div name='home' className='w-screen h-screen bg-gray-900 dark:bg-white'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col lg:flex-row justify-center items-center h-full text-center'>
                <div className='w-30 h-30 lg:w-50 lg:h-50 m-auto mb-10 mt-32  lg:pt-0 lg:mb-0 lg:mt-10 '>
                    <img src={deved} alt="Developer" className=' object-cover' />
                </div>
                <div className='lg:ml-10 text-center lg:text-center'>
                    <h2 className='text-3xl lg:text-5xl py-0 lg:py-2 text-teal-600 font-medium mt-0 lg:mt-0 pt-0 lg:pt-10 '>Chaitanya Girgaonkar</h2>
                    <h3 className='text-white dark:text-gray-500 text-1xl text-2xl ml-0 py-2 lg: align-middle'>Web Developer</h3>
                    <div className='p-2 lg:p-4 flex flex-col  gap -0 lg:flex-row items-center lg:items-start justify-center lg:gap-10 '>

                        <a href={resume} download="resume"><button className='text-teal-600 bg-gray-900 border border-2 border-teal-600 px-4 py-2 rounded-full mb-2 lg:mb-0 lg:mr-2 dark:bg-white'>
                            Download CV
                        </button></a>


                        <button className='text-white bg-teal-600 border border-2 border-teal-600 px-4 py-2 rounded-full'>
                            <Link to='contact' smooth={true} duration={500} >Contact Info</Link>
                        </button>
                    </div>
                    <div className='hidden md:flex text-4xl  justify-center lg:justify-center gap-16 py-3 text-white dark:text-gray-500'>
                        <a href="https://github.com/chaitanyagirgaonkar" target="blank"><AiFillGithub /></a>
                        <a href="https://www.linkedin.com/in/chaitanya-girgaonkar-4576b4226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank"><AiFillLinkedin /></a>
                        <a href="https://www.instagram.com/__chaitanyagirgaonkar__?utm_source=qr&igsh=YjE5NDMyY2FhOQ==" target="blank"><AiFillInstagram /></a>



                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
