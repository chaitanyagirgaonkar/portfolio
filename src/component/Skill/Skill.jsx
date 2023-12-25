import React from 'react'
import html from '../../../public_pro/html.png'
import css from '../../../public_pro/css.png'
import javascript from '../../../public_pro/javascript.png'
import react from '../../../public_pro/react.png'
import tailwind from '../../../public_pro/tailwind.png'
import python from '../../../public_pro/python.png'



function Skill() {

    const skill = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title: 'React JS',
            style: 'shadow-sky-600'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind CSS',
            style: 'shadow-sky-600'
        },
        {
            id: 4,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-600'
        },
    ]

    return (
        <div name='skills' className='w-screen h-screen bg-gray-900 dark:bg-white text-white dark:text-black'>
            <div className='h-[100px]'></div>
            <h1 className='text-teal-600 text-5xl text-center font-semibold mb:10  pt-40 lg:pt-0'>My Skills</h1>
            <div className='w-full pt-40 lg:pt-20 grid grid-cols-2 sm:grid-cols-3 gap-10 text-center items-center lg:ml-10 py-8 px-12 m-auto sm:px-0'>

                {skill.map(({ id, src, title, style }) => (
                    <div key={id} className={`shadow-md hover:scale-105  duration-500 py-2 rounded-lg ${style} lg:w-80 `}>
                        <img src={src} alt="html" className='w-20 mx-auto' />
                        <p className='mt-4'>{title}</p>
                    </div>
                ))}
                {/* <div className='sadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={html} alt="html" className='w-20 mx-auto' />
                    <p className='mt-4'>HTML</p>
                </div> */}
            </div>
        </div>
    )
}

export default Skill