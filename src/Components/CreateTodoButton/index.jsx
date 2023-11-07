import React from "react";
import { TodoContext } from "../TodoContext";

const CreateTodoButton = () => {
    const { setOpenModal, openModal } = React.useContext(TodoContext)
    const addTodo = () => {
        if (openModal) {
            setOpenModal(false)
        } else {
            setOpenModal(true)
        }
    }
    return (
        <>  
            <button className='button-add ' onClick={addTodo}>+</button>
        </>
    )
}

export { CreateTodoButton }