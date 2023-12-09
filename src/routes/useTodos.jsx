import React, { useReducer } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from 'react';

const reducerObject = (data, newData) => ({
    'completed' : {
        ...data,
        completed: !data.completed
    },
    'edit': {
        ...data,
        text: newData
    }
})

const useTodos = () => {
    const [dataTodo, setDataTodo] = React.useState([])
    const [changeFetch, setChangeFetch] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    // Todo Search
    const [search, setSearch] = React.useState('') 
    // Todo Counter / Estado derivados
    const totalTodos = dataTodo.length 
    const completedTodos = dataTodo.filter(element => element.completed).length 
    // filtrado de todos / Estado derivados
    const toSearched = dataTodo.filter(element => element.text.toLowerCase().includes(search.toLowerCase())) 
    
    useEffect(() => {
        if (dataTodo.length === 0) {
            setTimeout(() => {
                fetch('http://localhost:3000/notes')
                .then(response => response.json())
                .then(data => setDataTodo(data))
                setLoading(false)
            }, 1000)
        } else {
            fetch('http://localhost:3000/notes')
                .then(response => response.json())
                .then(data => setDataTodo(data))
        }
    }, [changeFetch])
    const fetchNotePuttWithID = (id, payload, newData) => {
        setChangeFetch(false)
        fetch(`http://localhost:3000/notes/${id}`) 
        .then(response => response.json())
        .then(data => {
            if (payload === 'completed') {
                console.log('NO SE TIENE QUE EJECUTAR')
                updateFetchNotePut(data, payload)
            } else if (payload === 'edit') {
                upfateFetchNoteText(data, payload, newData)
            } else return data
        })
    }
    
    const updateFetchNotePut = (data, payload) => {
        fetch(`http://localhost:3000/notes/${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reducerObject(data)[payload])
        })
        .then(response => {
            if (response.status < 300) {
                setChangeFetch(true)
            }
        })
        
    }
    
    const deleteFetchNote = (id) => {
        
        
        setChangeFetch(false)
        fetch(`http://localhost:3000/notes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },  
        })
        .then(response => {
            if(response.status < 300) {
                setChangeFetch(true)
            }
        })
    }
    
    const fetchNotePost = (data) => {
        setChangeFetch(false)
        fetch('http://localhost:3000/notes/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if(response.status < 300) {
                setChangeFetch(true)
            }
        })
    }
    
    const upfateFetchNoteText = (data, payload, newData) => { 
        fetch(`http://localhost:3000/notes/${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reducerObject(data, newData)[payload])
        })
        .then(response => {
            if(response.status < 300) {
                console.log('se esta ejecutando?')
                setChangeFetch(true)
            }
        })
    }
    // Array de Todos (Array Madre)
    // const { item: todos, saveItem: setTodos, loading, syncUp } = useLocalStorage('TODOS_V1', []) // este se modifica
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
        openUpdateModal,
        dataTodo,
        changeFetch
    } 
    const stateUpdater = {
        setSearch,
        setOpenUpdateModal, 
        setChangeFetch
    }

    const functions = {
        fetchNotePuttWithID,
        deleteFetchNote,
        fetchNotePost
    }
    return { state, stateUpdater, functions }
}

export { useTodos }