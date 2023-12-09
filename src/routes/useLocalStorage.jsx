import React, { useEffect, useReducer } from "react";

const initialState = ( initialValue ) => ({
    synchronization: true,
    item: initialValue,
    loading:true
})

const actionTypes = {
    synchronization: 'SYNCHRONIZATION',
    item: 'ITEM',
    loading: 'LOADING'
}

const reducerObject = (state, payload) => ({
    [actionTypes.loading] : {
        ...state,
        loading: payload
    },
    [actionTypes.item] : {
        ...state,
        item: payload
    },
    [actionTypes.synchronization]: {
        ...state,
        synchronization: payload
    }
})

const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state
}

const useLocalStorage = (initialName, initialValue) => {
    const [state, dispatch] = useReducer(reducer, initialState( initialValue ))
    const { synchronization, item, loading} = state
    
const onLoading = (props) => {
    dispatch({ type: actionTypes.loading, payload: props })
}
const onItem = (getItem) => {
    dispatch({ type: actionTypes.item, payload: getItem})
}
const onSyncronization = (props) => {
    dispatch({ type: actionTypes.synchronization, payload: props})
}
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
            onLoading(false)
            onItem(getItem)
            onSyncronization(true)
        } catch (error) {
            onLoading(false)
            console.log(error)
        }
    }, 4000)
}, [synchronization])
const saveItem = (newItem) => {
    localStorage.setItem(initialName, JSON.stringify(newItem)) 
    onItem(newItem) 
}

const syncUp = () => {
    onLoading(true)
    onSyncronization(false)
}
return { item, saveItem, loading, syncUp }

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