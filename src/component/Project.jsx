import React from 'react'
import todo from '../../public_pro/todo.png'
import codemaster from '../../public_pro/codemaster.png'
import careconnect from '../../public_pro/careconnect.png'
import eduscribe from '../../public_pro/eduscribe.png'


function Project() {

    const Project = [
        {
            id: 1,
            src: todo,
            style: 'shadow-purple-600',
            border: 'border-purple-600',
            code: 'https://github.com/chaitanyagirgaonkar/Todo-List',
            link: 'https://todotrek.netlify.app/'
        },
        
        {
            id: 3,
            src: eduscribe,
            style: 'shadow-blue-600',
            border: 'border-blue-600',
            code: 'https://github.com/chaitanyagirgaonkar/eduscribe',
            link: 'https://eduscribee.vercel.app/'
        },
        {
            id: 2,
            src: codemaster,
            style: 'shadow-green-600',
            border: 'border-green-600',
            code: 'https://github.com/YashMulik2005/code_master',
            link: 'https://mastercode.netlify.app/'
        },
        {
            id: 4,
            src: careconnect,
            style: 'shadow-blue-600',
            border: 'border-blue-600',
            code: 'https://github.com/chaitanyagirgaonkar/CareConnect',
            link: 'https://careconnect-khaki.vercel.app/'
        },


    ]

    return (
        <div name='project' className='w-screen h-screen bg-gray-900 dark:bg-white text-white dark:text-black'>
            <div className='lg:h-[100px]'></div>
            <h1 className='text-teal-600 text-5xl text-center font-semibold mb:10  pt-40 lg:pt-0'>My Projects</h1>



            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-20 px-12 sm:px-20 mx-auto pt-20 m-auto'>

                {Project.map(({ id, src, style, border, code, link }) => (
                    <div key={id} className={`shadow-md  rounded-lg ${style} m-auto hover:scale-105`}>
                        <img src={src} alt="" className='rounded-md duration-200 ' />
                        <div className='flex items-center justify-center'>
                            <a href={link} target="blank"><button className={` text-white  border  rounded-md px-6 py-3 m-4 duration-200 hover:scale-105 ${border} dark:text-black`}>Demo</button></a>
                            <a href={code} target="blank"> <button className={` text-white  border  rounded-md px-6 py-3 m-4 duration-200 hover:scale-105 ${border} dark:text-black`}>Code</button></a>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Project