import React, { useEffect } from "react";

const useLocalStorage = (initialName, initialValue) => {
    const [item, setItem] = React.useState(initialValue)
    const [loading, setLoading] = React.useState(true)
    useEffect(() => {
        setTimeout(() => {
            try {
                const getLocal = localStorage.getItem(initialName)
                let getItem;
                if (!getLocal) {
                    localStorage.setItem(initialName, JSON.stringify(initialValue))
                    getItem = initialValue
                } else {
                    getItem = JSON.parse(getLocal)
                }
                setLoading(false)
                setItem(getItem)
            } catch (error) {
                setLoading(false)
                console.log(error)
            }
        }, 1000)
        }, [])
        const saveItem = (newItem) => {
            localStorage.setItem(initialName, JSON.stringify(newItem)) 
            setItem(newItem) 
        }
        return { item, saveItem, loading }

}

export {useLocalStorage}

// const defaultTodos = [
//     {text: 'Volver a tomar el Curso de Javascript', completed: false},
//     {text: 'Volver a tomar el curso de React con VIte y tailwind', completed: false},
//     {text: 'Tomar clases de CSS', completed: false},
//     {text: 'Volver a tomar el Curso de React', completed: false},
//     {text: 'Arreglar mi Cuarto', completed: false},
//   ]
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1')