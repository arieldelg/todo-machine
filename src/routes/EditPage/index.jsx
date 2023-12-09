import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useTodos } from "../useTodos";
import { useNavigate } from "react-router-dom";

const EditPage = () => {
    const location = useLocation()
    const { state } = location
    const params = useParams()
    const { id } = params
    const { functions } = useTodos()
    const { fetchNotePuttWithID } = functions
    const navigate = useNavigate()
    const [newAddTodo, setnewAddTodo] = React.useState(state.text)
    
    const upploadeTodo = () => {
        navigate('todo-machine/')
        fetchNotePuttWithID(id, 'edit', newAddTodo)
    }
    return (
        <div className="h-screen flex">
            <form action="" className="h-2/5 bg-gray-800 w-4/5 rounded-xl flex flex-col items-center justify-between pt-2 pb-10 m-auto" onSubmit={(event) => {
                event.preventDefault()
            }}>
                <h1 className='text-4xl text-center text-white py-3'>Edita tu todo</h1>
                <textarea id="" cols="30" rows="10" placeholder="Escribe aqui" className="rounded-lg p-2 text-lg h-2/5 my-4 w-11/12 outline-none" onChange={(event) => setnewAddTodo(event.target.value)} value={newAddTodo}></textarea>
                <div className="flex justify-between w-full px-10 mt-4">
                    <button className="w-28 py-1 bg-slate-500 text-lg rounded-lg hover:bg-slate-400" type="submit" onClick={() => upploadeTodo()}>Agregar</button>
                    <button className="w-28 py-1 bg-slate-500 text-lg rounded-lg hover:bg-slate-400" type="" onClick={() => navigate('todo-machine/')}>Cerrar</button>
                </div>
            </form>
        </div>
    )
}

export { EditPage }