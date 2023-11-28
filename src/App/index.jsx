import React from "react";
import { useTodos } from "./useTodos";
import { TodoList } from '../Components/TodoList'
import { TodoItem } from '../Components/TodoItem'
import { TodoCounter } from '../Components/TodoCounter'
import { TodoSearch } from '../Components/TodoSearch'
import { CreateTodoButton } from '../Components/CreateTodoButton'
import { AllTodosCompleted } from "../Components/AllTodosCompleted";
import { TodoNotFound } from "../Components/TodoNotFound";
import { FirstTodo } from "../Components/FirstTodo";
import { IoCreateOutline } from 'react-icons/io5';
import { Loading } from "../Components/LoadingTodo/Loading";
import { LoadingSkeleton } from "../Components/LoadingTodo/LoadingSkeleton";
import { Modal } from "../Components/Modal";
import { TodoForm } from "../Components/TodoForm";
import './App.css'
import { TodoHeader } from "../Components/TodoHeader";
import { ChangeAlert } from "../Components/ChangeAlert";
import { UpdateModal } from "../Components/UpdateModal";

const App = () => {
const { state, stateUpdater, functions } = useTodos()
const {
        search,
        totalTodos,
        completedTodos,
        toSearched,
        loading,
        openModal,
        todos,
        openUpdateModal,
} = state
const {
        setSearch,
        setOpenModal,
        setTodos,
        setOpenUpdateModal, 
} = stateUpdater
const {
        deleteTodos,
        completeTodos,
        syncUp, 
} = functions
const renderView = () => {
  if (toSearched.length > 0) {
    return (completedTodos === toSearched.length && search.length === 0) ? <AllTodosCompleted/> : <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos}/>
  } else if (toSearched.length >= 0 && loading === true) {
    return <Loading/>
  } else if (search.length > 0) {
    return <TodoNotFound/> 
  } else if (toSearched.length === 0) { 
    return <FirstTodo/>
  } 
}
  return (
  <div className='flex flex-col w-full items-center p-5'>
    <TodoHeader>
        {renderView()}
        <TodoSearch search={search} setSearch={setSearch}/>
    </TodoHeader>
    <TodoList 
      loading={loading}
      search={search}
      toSearched={toSearched}
      onLoading={ () => 
      <>
      <LoadingSkeleton/>
      <LoadingSkeleton/>
      <LoadingSkeleton/>
      </>
      }
      onEmpty={ () => <IoCreateOutline className='text-white text-6xl'/>}
      render={ element => (
        <TodoItem data={element} key={element.text} deleteTodos={deleteTodos} completeTodos={completeTodos}/>
      )}
    >
      {/* {
         element => (
          <TodoItem data={element} key={element.text} deleteTodos={deleteTodos} completeTodos={completeTodos}/>
        )
      } */}
    </TodoList>
    <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal}/>
    {
    openModal && 
    <Modal>
      <TodoForm setOpenModal={setOpenModal} todos={todos} setTodos={setTodos}/>
    </Modal>
    }
    {
      openUpdateModal &&
      <UpdateModal>
        <ChangeAlert syncUp={syncUp} setOpenUpdateModal={setOpenUpdateModal} openUpdateModal={openUpdateModal}/>
      </UpdateModal>
    }
  </div>
  )
}

export { App }