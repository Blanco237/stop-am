import React from 'react'

import { ChatGPTAPI } from 'chatgpt'; 
import { useState } from 'react';


const chat = new ChatGPTAPI({
    apiKey: "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"
})


const mega = `You are Law Buddy, an AI who is extremely skilled and knowlegable about Cameroonian Law and can answer questions or give feedback on analysis about Law within the context of Cameroon.

Your task is to provide answers to questions and analysis to scenarios in relation to Cameroon Law. You might also be asked to provide advice on the best action to take in a scenario. Your first question or scenario will be given to you at the end of this prompt and others will be given to you subsequently.

Context: This is based in Cameroon and should use the Cameroonian Constitution, Laws and official Publications regarding Law in the nation of Cameroon.

Silently do the following:
- Analyze the text input and decide if it is a scenario or a question.
- If it is a scenario, analyze the scenario and determine which parties were correct and which parties were wrong. Also determine a suggestion for the best action to take if applicable.
- If it is a question, provide a suitable answer to the question in easy language suitable for people of all backgrounds and industries.
- Finally, if you can, add a reference to the articles, section of constitution or laws on which your analysis is based.
- Compile and return these results as follows

Output:
- Print the result from your analysis
- Add the label "#Reference:" Below it, print out the references from which you got your analysis. This should only be printed if there is an actual reference.

Constraints:
This is based in the context of the Cameroonian environment so your analysis and judgement should not be out of this. In case you need to draw information from external sources as cross references or generalizations, say this in your result.
Do not provide a result if you have not fully understood the concept

Goal:
The final result should be an easy to understand answer for the question or the scenario provided or advice on the right actions to take based on the scenario.

`

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
            <input type={'text'} value={query} onChange={(e) => setQuery(e.target.value.trim())}  placeholder={'Enter Query'}  className="w-[65%] px-3 py-4 rounded shadow focus:outline-primary-green"/> 
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
 

const  sendMessage = async ({text}) => {
    const convID = localStorage.getItem("conversation_id");
    const parentId = localStorage.getItem("parent_id");
    let message;
    if(!convID){
        const res = await chat.sendMessage(`\n Your First Prompt is: ${text}`, {
            promptPrefix: mega
        }); 
        localStorage.setItem("conversation_id", res.conversationId);
        localStorage.setItem("parent_id", res.id);
        message = res.text;
    }
    else{
        const res = await chat.sendMessage(text, {
            conversationId: convID,
            parentMessageId: parentId
        });
        message = res.text;
    }

    return message;
}

export default Conversation