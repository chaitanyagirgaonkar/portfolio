import React, { useState } from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { FaBars, FaTimes } from 'react-icons/fa'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram, AiFillGithub, AiFillMail } from 'react-icons/ai';
import { Link } from 'react-scroll'
import resume from '../Header/resume_new.pdf'
import useTheme from '../../context/Theme';

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const [dark, setDark] = useState(true)
    const { themeMode, darkMode, lightMode } = useTheme()
    const clickbtn = () => {
        setDark(!dark)
        if (!dark) {
            darkMode()
        }
        else {
            lightMode()
        }

    }
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-900 dark:bg-white text-gray-300 dark:text-gray-500 z-50'>
            <div >
                <h1 className='font-burtons text-teal-600'>Chaitanya Girgaonkar</h1>
            </div>
            <div className='hidden md:flex'>
                <ul className='hidden md:flex '>
                    <li className='hover:text-teal-600 hover:scale-105'><Link to='home' smooth={true} duration={500} >Home</Link></li>
                    <li className='hover:text-teal-600 hover:scale-105'><Link to='about' smooth={true} duration={500} >About</Link></li>
                    <li className='hover:text-teal-600 hover:scale-105'><Link to='skills' smooth={true} duration={500} >Skills</Link></li>
                    <li className='hover:text-teal-600 hover:scale-105'><Link to='project' smooth={true} duration={500} >Project</Link></li>
                    <li className='hover:text-teal-600 hover:scale-105'><Link to='contact' smooth={true} duration={500} >Contact</Link></li>
                </ul>



            </div>
            <div className='flex'>
                <li className='hidden md:flex text-2xl mt-2'>
                    <BsFillMoonStarsFill onClick={clickbtn} className='cursor-pointer ' />
                </li>
                <a href={resume} target="resume"><button className='hidden md:flex bg-teal-600 text-white px-4 py-2 border-none rounded-md ml-8'>Resume</button></a>


            </div>
            <div className='md:hidden flex flex-row  gap-6'>
                <a href="https://github.com/chaitanyagirgaonkar" target="blank"><AiFillGithub className='text-2xl' /></a>
                <a href="https://www.linkedin.com/in/chaitanya-girgaonkar-4576b4226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank"><AiFillLinkedin className='text-2xl' /></a>
                <a href="mailto:girgaonkar.chaitanya@gmail.com" target="blank"><AiFillMail className='text-2xl' /></a>




                <BsFillMoonStarsFill onClick={clickbtn} className='cursor-pointer text-2xl' />
            </div>
            {/* hambarger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars className='text-2xl' /> : <FaTimes className='text-2xl' />}
            </div>

            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : '  absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to='home' smooth={true} duration={500} >Home</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to='about' smooth={true} duration={500} >About</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to='skills' smooth={true} duration={500} >Skills</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to='project' smooth={true} duration={500} >Project</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to='contact' smooth={true} duration={500} >Contact</Link></li>
            </ul>

            {/* social icon */}
            <div className='hidden'></div>

        </div>
    )
}

export default Navbar