// rafce

import React from 'react'
import { HiOutlineCheckCircle } from "react-icons/hi";
import { useState } from "react";
import Taches  from "./components/taches/taches";


const App = () => {
  const [task, setTask] = useState("");

  const [allTask, setAllTask] = useState([{label:"Rediger un texte",isDone:false} , {label: "Me marier avant 26ans", isDone:false}]);
  

   const handleTaskSubmit =()=>{
      const data = {}
      data.label = task,
      data.isDone = false
      setAllTask((prev)=>[...prev, data])
      setTask('');

    }
      

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 flex items-center justify-center p-5'>
      
      <div className='w-full max-w-md bg-white rounded-3xl shadow-2xl p-7'>
        
        {/* Header */}
        <div className='flex items-center gap-3 mb-8'>
          <div className='bg-blue-100 p-2 rounded-full'>
            <HiOutlineCheckCircle className='w-10 h-10 text-blue-700' />
          </div>

          <div>
            <h1 className='text-3xl font-bold text-slate-800'>
              Todo List
            </h1>
            <p className='text-slate-500 text-sm'>
              Organise tes tâches facilement
            </p>
          </div>
        </div>

        {/* Input */}
        <div className='flex items-center bg-slate-100 rounded-full p-2 mb-7 shadow-inner'>
          
          <input
            type='text'
            placeholder='Ajouter une tâche...'
            className='flex-1 bg-transparent px-4 py-2 outline-none text-slate-700 placeholder:text-slate-400'
            name="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button className='bg-blue-700 hover:bg-blue-800 transition-all duration-300 text-white px-5 py-2 rounded-full font-medium shadow-md'  onClick= {handleTaskSubmit}>
            Ajouter
          </button>
        </div>
        <div>
        <Taches allTask={allTask} setAllTask={setAllTask} />             </div>
    
      </div>
    </div>
  )
}

export default App