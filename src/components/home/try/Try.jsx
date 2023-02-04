import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

import image from './image.svg';
import justice from './justice.svg';

const Try = () => {
  return (
    <section className='w-full bg-gray flex'>
        <div className='w-9/12 h-[50vh] pt-[5rem] pl-[3rem] flex flex-col gap-2'>
            <h1 className='text-5xl font-semibold w-[50%] leading-[4rem] text-primary-dark'>Try Our <span className='text-primary-green'>Solution</span></h1>
            <p className='text-primary-dark w-[50%] text-justify text-lg'>Use our innovative solution today in your daily interactions. Login, make a query, ask a question and be informed.</p>
            <button className="px-7 py-2 bg-primary-green w-[15%] flex justify-center items-center gap-2 shadow-md rounded text-white transition-all hover:bg-accent-green active:shadow-sm">
          Ask AI <FaArrowRight />
        </button>
        </div>
        <div className='w-3/12  h-[50vh] relative'>
            <img src={image} className="w-full -mt-[10rem] -ml-[9rem]" />
            <img src={justice} className="absolute" />
        </div>

    </section>
  )
}

export default Try