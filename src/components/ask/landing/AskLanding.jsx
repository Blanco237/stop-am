import React from 'react'

const AskLanding = () => {

  return (
    <section className='w-full flex items-center min-h-[60vh]'>
        <div className='w-9/12 bg-primary-dark h-[60vh] pt-[10rem] pl-[3rem] flex flex-col gap-2'>
            <h1 className='text-5xl font-semibold w-[50%] leading-[4rem] text-white'>Ask <span className='text-primary-green'>AI</span></h1>
            <p className='text-white w-[50%] text-justify text-lg'>We are here to help you take care of your legality with the best service especially for you.</p>
        </div>
        <div className='w-3/12 bg-primary-green h-[60vh]'> 
        </div>
    </section>
  )
}

export default AskLanding