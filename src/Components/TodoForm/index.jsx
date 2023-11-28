import React from "react";

const TodoForm = ({ setOpenModal, todos, setTodos }) => {
    const [newAddTodo, setnewAddTodo] = React.useState('')
    const writeTodo = (event) => {
        setnewAddTodo(event.target.value)
        console.log(event.target.value)
        console.log(newAddTodo.length)
    }
    const upploadeTodo = () => {
        if (newAddTodo.length > 1) {

            const postTodo = {
                'text': newAddTodo,
                'completed': false
            }
            const newTodos = [...todos, postTodo] 
            setTodos(newTodos)
            setOpenModal(false)
        } else {
            setOpenModal(false)
        }
    }
    return (
        <div className='flex flex-col items-center h-full justify-center'>
            <form action="" className="h-2/5 bg-gray-800 w-4/5 rounded-xl flex flex-col items-center justify-between pt-5 pb-20" onSubmit={(event) => {
                event.preventDefault()
            }}>
                <h1 className='text-4xl text-center text-white py-3'>En que estas Pensando?</h1>
                <textarea id="" cols="30" rows="10" placeholder="Escribe aqui" className="rounded-lg p-2 text-lg h-2/5 my-4 w-11/12 outline-none" onChange={(event) => writeTodo(event)} value={newAddTodo}></textarea>
                <div className="flex justify-between w-full px-10 mt-4">
                    <button className="w-28 py-1 bg-slate-500 text-lg rounded-lg hover:bg-slate-400" type="submit" onClick={() => upploadeTodo()}>Agregar</button>
                    <button className="w-28 py-1 bg-slate-500 text-lg rounded-lg hover:bg-slate-400" type="" onClick={() => setOpenModal(false)}>Cerrar</button>
                </div>
            </form>
        </div>
    )
}

export { TodoForm }