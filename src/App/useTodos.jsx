import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from 'react';


const useTodos = () => {
    // Modal / Abrir y cerrar Modal
    const [openModal, setOpenModal] = React.useState(false)
    // Array de Todos (Array Madre)
    const { item: todos, saveItem: setTodos, loading, syncUp } = useLocalStorage('TODOS_V1', [])
    // Todo Search
    const [search, setSearch] = React.useState('')
    // Todo Counter / Estado derivados
    const totalTodos = todos.length
    const completedTodos = todos.filter(element => element.completed).length
    // AppUI / Estados Derivados
    const toSearched = todos.filter(element => element.text.toLowerCase().includes(search.toLowerCase()))
    // Todo Item / eliminar todos (localStorage)
    const deleteTodos = (text) => {
        const newTodos = [...todos]
        const index = newTodos.findIndex(element => element.text === text)
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }
    // Todo Item / completar todos (localStorage)
    const completeTodos = (text) => {
        const newTodos = [...todos]
        const index = newTodos.findIndex(element => element.text === text)
        if (newTodos[index].completed) {
            newTodos[index].completed = false
        } else {
            newTodos[index].completed = true
        }
        setTodos(newTodos)
    }
    const [openUpdateModal, setOpenUpdateModal] = React.useState(false)
    const change = ({ key }) => {
        if (key === 'TODOS_V1') {
            setOpenUpdateModal(true)
        }
    }
    window.addEventListener('storage', change)
    const state = {
        search,
        totalTodos,
        completedTodos,
        toSearched,
        loading,
        openModal,
        todos,
        openUpdateModal,
    } 
    const stateUpdater = {
        setSearch,
        setOpenModal,
        setTodos,
        setOpenUpdateModal, 
    }

    const functions = {
        deleteTodos,
        completeTodos,
        syncUp, 
    }
    return { state, stateUpdater, functions }
}

export { useTodos }