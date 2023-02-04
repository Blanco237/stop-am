import React from 'react'

import { useState } from 'react';
import axios from 'axios';


const Conversation = () => {

    const [query, setQuery] = useState("");
    const [convHistory, setConvHistory] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setConvHistory([...convHistory, {source: 'you', text: query}]);
        setQuery("");
        const message = await sendMessage(query);
        setConvHistory([...convHistory, {source: 'ai', text: message }]);
    }
     
  return (
    <section className='w-full bg-gray py-12'>
        {
            convHistory.length === 0 ? (
                <div className='w-full text-center text-xl mb-4'>No History. Ask a Question</div>
            ) : (
                <div className='flex flex-col '>
            {
                convHistory.map((item,i) => {
                    return <ConvCard {...item} />
                })
            }
        </div>
            )
        }
        <form onSubmit={handleSubmit} className='w-full flex justify-center items-center'>
            <input type={'text'} value={query} onChange={(e) => setQuery(e.target.value)}  placeholder={'Enter Query'}  className="w-[65%] px-3 py-4 rounded shadow focus:outline-primary-green"/> 
        </form>
    </section>
  )
}


const ConvCard = ({ source, text}) => {

    const styles = {
        alignSelf: source === 'ai' ? 'start' : 'end',
        clear: 'both',
    }

    return (
        <div style={styles} className={`w-[70%] ${source === 'ai'? 'bg-primary-green': 'bg-primary-dark'} mb-5 py-4 px-3 rounded-md shadow text-white`}>
            {text}
        </div>
    )
}
 

const  sendMessage = async (text) => {
    let message;
    const res = await axios.post("https://stopam.onrender.com/input", {message: text})
    // const res = await axios.post("http://localhost:4000/input", {message: text})
    message = res.data.message;
    return message;
}

export default Conversation