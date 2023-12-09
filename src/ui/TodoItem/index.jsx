import React from "react";
import { BsCheckLg } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import { useNavigate } from "react-router-dom";

const TodoItem = ({ data, deleteFetchNote, fetchNotePuttWithID }) => {
    const navigate = useNavigate()
    
    return (
        <div className="flex w-full gap-4 h-max bg-slate-500 py-2 rounded-lg px-2 relative items-center">
            <p className={`${data.completed && 'text-green-800'} cursor-pointer hover:text-green-800`} onClick={() => fetchNotePuttWithID(data.id, 'completed', 'check')}><BsCheckLg className='text-3xl'/></p>
            <li className={`sm:text-lg md:text-xl text-start pr-2 ${data.completed && 'line-through'}`}>{data.text}</li>
            <PencilSquareIcon className={`w-7 h-7 absolute -top-3 right-12 hover:text-yellow-500`} onClick={() => navigate(`todo-machine/edit/${data.id}`, { state: data })}/>
            <p className='absolute -top-3.5 right-2 hover:text-red-500 cursor-pointer' onClick={() => deleteFetchNote(data.id)}><AiFillCloseCircle className='text-3xl'/></p>
        </div>        
)
}

export {TodoItem}