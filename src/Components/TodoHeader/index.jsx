import React from "react";

const TodoHeader = ({ children }) => {
    return (
        <div className='w-full flex flex-col items-center' >
            { children }
        </div>
    )
}

export { TodoHeader }