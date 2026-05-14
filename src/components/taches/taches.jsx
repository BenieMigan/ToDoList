import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { LuCircle } from "react-icons/lu";

const Taches = ({ allTask, setAllTask }) => {

  const handleTaskCompletion = (index) => {

    setAllTask(
      allTask.map((item, i) => {

        return i === index
          ? { ...item, isDone: !item.isDone }
          : item;

      })
    )

  };

     const handleTaskDeletion = (index) => {
        setAllTask((prev)=> prev.filter((item, i) => i !== index));
      };

  return (

    <div className='space-y-4'>

      {allTask.map((item, index) => {

        return (

          <div
            key={index}
            className='flex items-center justify-between bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300'
          >

            {/* Partie gauche */}
            <div className='flex items-center gap-4'>

              {
                item.isDone ? (

                  <>
                    <div
                      className='bg-blue-100 p-2 rounded-full cursor-pointer hover:scale-110 transition-all duration-300'
                      onClick={() => handleTaskCompletion(index)}
                    >
                      <IoCheckmarkCircleSharp
                        className='text-2xl text-blue-700'
                      />
                    </div>

                    <div>
                      <h2 className='font-semibold text-slate-500 line-through text-lg'>
                        {item.label}
                      </h2>
                    </div>
                  </>

                ) : (

                  <>
                    <div
                      className='bg-slate-100 p-2 rounded-full cursor-pointer hover:scale-110 transition-all duration-300'
                      onClick={() => handleTaskCompletion(index)}
                    >
                      <LuCircle className='text-2xl text-slate-700' />
                    </div>

                    <div>
                      <h2 className='font-semibold text-slate-800 text-lg'>
                        {item.label}
                      </h2>
                    </div>
                  </>

                )
              }

            </div>

            {/* Bouton supprimer */}
            <button
              className='bg-red-100 hover:bg-red-200 p-3 rounded-full transition-all duration-300 hover:scale-105'
            >
                    <AiOutlineDelete className='text-red-600 text-xl' onClick={()=>handleTaskDeletion(index)} />
            </button>

          </div>

        );

      })}

    </div>

  );

};

export default Taches