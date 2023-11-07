import React from "react";


const TodoList = ({ children }) => {
    return (
        <ul className=' flex flex-col items-center list-none bg-gray-800 bg-opacity-70 rounded-2xl p-6 text-2xl gap-5 max-5xl m-6 md:w-10/12 md:mx-6 sm:w-full sm:mx-0'>
            {children}
        </ul>
    )
}

export {TodoList}