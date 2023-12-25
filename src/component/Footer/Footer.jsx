import React from 'react'
import { Link } from 'react-scroll'

function Footer() {
    return (
        <div className='w-screen h-[100px] bg-gray-900 dark:bg-white text-white dark:text-black'>
            <footer>
                <nav>
                    <div >
                        <ul className='hidden md:flex flex-row justify-center '>
                            <li><Link to='home' smooth={true} duration={500} >Home</Link></li>
                            <li><Link to='about' smooth={true} duration={500} >About</Link></li>
                            <li><Link to='skills' smooth={true} duration={500} >Skills</Link></li>
                            <li><Link to='project' smooth={true} duration={500} >Project</Link></li>
                            <li><Link to='contact' smooth={true} duration={500} >Contact</Link></li>
                        </ul>
                    </div>
                </nav>
                <div className='text-center m-0 lg:m-10 text-sm'>
                    <p>Copyright &#169; 2023 Chaitanya Girgaonkar. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer