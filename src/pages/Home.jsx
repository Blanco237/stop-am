import React from 'react'
import Landing from '../components/home/landing/Landing'
import Practices from '../components/home/practices/Practices'
import Try from './../components/home/try/Try';

const Home = () => {
  return (
    <main>
        <Landing />
        <div className='w-full bg-gray h-12'></div>
        <Practices />
        <Try />
    </main>
  )
}

export default Home