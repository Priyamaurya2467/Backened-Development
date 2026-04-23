import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Form() {

    const [question,setquestion] = useState("");
    const [answer,setanswer] = useState("");
    const [list,setlist] = useState([]);

     const loadqna = async () => {
    try {
      const res = await axios.get("http://localhost:8000/getqna");
      setlist(res.data); // ✅ important
    } catch (err) {
      console.log(err);
    }
  };
    useEffect(()=>{
     
      loadqna();
      
    },[])

    const deleteqna = async(id) => {
      try{
        await axios.delete(`http://localhost:8000/deleteqna/${id}`);
        loadqna();
      }catch(err){
        console.log(err)
      }
    };
    

  
    const addqna = async(e)=>{
      if(!question || !answer)return;

      try{
        await axios.post("http://localhost:8000/addqna",{
          question,answer
        })
      
      setquestion("");
      setanswer("");
      loadqna();
    }catch(err){
      console.log(err)
    }
  };

  return (
    <>

    <h2 className='text-lg font-semibold mb-4'>
        Add Question & Answer
    </h2>

    <label className='block text-sm font-medium'>Questions</label>
    <input
    className='w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
    placeholder='Enter your question'
    value={question}
    onChange={(e)=>setquestion(e.target.value)}
    
     />

     <label className="block text-sm font-medium mt-4">Answer</label>
     <textarea
     className='w-full mt-1 p-2 border rounded-md h-24 focus:outline-none focus:ring-blue-400'
     placeholder='Enter your answer'
     value={answer}
     onChange={(e)=>setanswer(e.target.value)}

     />

     <button
     className='mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700'
     onClick={addqna}>
      Add Question
     </button>


     <div className='bg-white max-w-2xl mx-auto p-6 rounded-xl shadow mt-6'>
      <h2 className='text-lg font-semibold mt-4'>All Question</h2>

      {list.map((item) => (
        <div key={item._id}
        className='border rounded-lg p-4 mb-4'
        
        >
          <h3 className='text-blue-600 font-semibold'>{item.question}</h3>
          <p className='text-gray-700'>{item.answer}</p>
          <p className='text-xs text-gray-400 mt-2'>{new Date(item.createdAt).toLocaleString()}</p>
          <button className='mt-4 bg-red-600 text-white rounded-md px-3 py-1 hover:bg-red-700' onClick={()=>deleteqna(item._id)}>Delete</button>
        </div>
      ))}
     </div>
    
  
  
</>
  )
}

export default Form