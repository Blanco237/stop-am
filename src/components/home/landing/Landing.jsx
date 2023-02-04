import React from 'react';
import { Link } from 'react-router-dom';

import image from './image.svg';

const Landing = () => {
  return (
    <section className='w-full flex items-center min-h-[80vh]'>
        <div className='w-9/12 bg-primary-dark h-[80vh] pt-[10rem] pl-[3rem] flex flex-col gap-2'>
            <h1 className='text-5xl font-semibold w-[50%] leading-[4rem] text-white'>Our Purpose is Community <span className='text-primary-green'>Safety</span></h1>
            <p className='text-white w-[50%] text-justify text-lg'>We are here to help you take care of your legality with the best service especially for you.</p>
            <Link to={'/ask'} >
            <button className="px-7 py-2 bg-primary-green w-[15%] shadow-md rounded text-white transition-all hover:bg-accent-green active:shadow-sm">
          Get Started
        </button>
            </Link>
        </div>
        <div className='w-3/12 bg-primary-green h-[80vh]'>
            <img src={image} className="w-full mt-[5rem] -ml-[8.5rem]" />
        </div>
    </section>
  )
}

export default Landing