import React from "react";

const TodoCounter = ({ completedTodos, totalTodos}) => {
    return(
        <>
            <h1 className='p-4 text-5xl text-center h-32 flex flex-wrap items-center gap-4 justify-center'>Completaste<strong>{completedTodos}</strong>de<strong>{totalTodos}</strong>Todos</h1>
        </>
    )
}

export { TodoCounter }