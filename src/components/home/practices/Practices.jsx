import React from 'react'
import { FaNewspaper } from 'react-icons/fa'

import right from './Design.svg'
import left from './left.svg';

const Practices = () => {

    const practices = 
        {
            title: "Inform",
            body: "Ask questions about daily activities and scenarios and receive a response",
            icon: <FaNewspaper />
        }


  return (
    <section className='min-h-[110vh] pb-[20vh] flex justify-center items-center gap-2 px-16 relative isolate'>
        <div className='w-1/2'>
            <h1 className='text-5xl font-semibold w-[50%] leading-[4rem] text-primary-dark'>Our Practices</h1>
            <p className='text-primary-dark w-[70%] text-justify text-lg'>We leverage artificial intelligence to provide
social knowledge and information about law 
within the context of Cameroon and various 
national institutions and scenarios</p>
        </div>
        <div className='w-1/2 grid grid-cols-2 gap-8'>
            {
                [...Array(4)].map((_,i) => {
                    return <PracticeCard {...practices} />
                })
            }
        </div>

        <img src={right}  className="absolute right-0" />
        <img src={left} className="absolute left-0 z-[-1]" />
    </section>
  )
}

const PracticeCard = ({title, icon, body}) => {
    return (
        <div className='bg-gray rounded-md shadow-md flex flex-col items-center py-3 px-4 max-w-[12rem]'>
            <span className='text-3xl'>{icon}</span>
            <h3 className='text-xl font-medium text-justify'>{title}</h3>
            <p className='text-sm'>{body}</p>
        </div>
    )
}

export default Practices