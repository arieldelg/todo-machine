import React from "react";
import { BsCheckLg } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TodoContext } from "../TodoContext";
 
const TodoItem = ({ data }) => {
    const { deleteTodos, completeTodos } = React.useContext(TodoContext)
    return (
        <div className="flex w-full gap-4 h-max bg-slate-500 py-2 rounded-lg px-2 relative items-center">
            <p className={`${data.completed && 'text-green-800'} cursor-pointer hover:text-green-800`} onClick={() => completeTodos(data.text)}><BsCheckLg className='text-3xl'/></p>
            <li className={`sm:text-lg md:text-xl text-start pr-2 ${ data.completed && 'line-through'}`}>{data.text}</li>
            <p className='absolute -top-3.5 right-2 hover:text-red-500 cursor-pointer' onClick={() => deleteTodos(data.text)}><AiFillCloseCircle className='text-3xl'/></p>
        </div>        
)
}

export {TodoItem}