import React from "react";

const CreateTodoButton = ({ setOpenModal, openModal }) => {
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