import React from "react";
import { TodoList } from '../Components/TodoList'
import { TodoItem } from '../Components/TodoItem'
import { TodoCounter } from '../Components/TodoCounter'
import { TodoSearch } from '../Components/TodoSearch'
import { CreateTodoButton } from '../Components/CreateTodoButton'
import { TodoContext } from "../Components/TodoContext";
import { AllTodosCompleted } from "../Components/AllTodosCompleted";
import { TodoNotFound } from "../Components/TodoNotFound";
import { FirstTodo } from "../Components/FirstTodo";
import { IoCreateOutline } from 'react-icons/io5';
import { Loading } from "../Components/LoadingTodo/Loading";
import { LoadingSkeleton } from "../Components/LoadingTodo/LoadingSkeleton";
import { Modal } from "../Components/Modal";
import { TodoForm } from "../Components/TodoForm";

const AppUI = () => {
const { toSearched, completedTodos, search, loading, openModal, setOpenModal  } = React.useContext(TodoContext)
const renderView = () => {
  if (toSearched.length > 0) {
    return (completedTodos === toSearched.length && search.length === 0) ? <AllTodosCompleted/> : <TodoCounter />
  } else if (toSearched.length >= 0 && loading === true) {
    return <Loading/>
  } else if (search.length > 0) {
    return <TodoNotFound/> 
  } else if (toSearched.length === 0) {
    console.log(toSearched.length)
    console.log(loading)
    return <FirstTodo/>
  } 
}
  return (
  <div className='flex flex-col w-full items-center p-5'>
    {renderView()}
    <TodoSearch/>
    <TodoList>
      {loading && 
      <>
      <LoadingSkeleton/>
      <LoadingSkeleton/>
      <LoadingSkeleton/>
      <LoadingSkeleton/>
      <LoadingSkeleton/>
      </>
      }
      {(search.length > 0 && toSearched.length === 0) && <IoCreateOutline className='text-white text-6xl'/>}
      {
        toSearched.map(element => (
          <TodoItem data={element} key={element.text}/>
        ))
      } 
    </TodoList>
    <CreateTodoButton/>
    {
    openModal && 
    <Modal>
      <TodoForm/>
    </Modal>
    }
  </div>
  )
}

export { AppUI }