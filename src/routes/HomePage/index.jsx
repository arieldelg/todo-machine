import React from "react";
import { IoCreateOutline } from 'react-icons/io5';
import { useTodos } from "../useTodos";
import { TodoList } from '../../ui/TodoList'
import { TodoItem } from '../../ui/TodoItem'
import { TodoCounter } from '../../ui/TodoCounter'
import { TodoSearch } from '../../ui/TodoSearch'
import { CreateTodoButton } from '../../ui/CreateTodoButton'
import { AllTodosCompleted } from "../../ui/AllTodosCompleted";
import { TodoNotFound } from "../../ui/TodoNotFound";
import { FirstTodo } from "../../ui/FirstTodo";
import { Loading } from "../../ui/LoadingTodo/Loading";
import { LoadingSkeleton } from "../../ui/LoadingTodo/LoadingSkeleton";
import { Modal } from "../../ui/Modal";
import { TodoForm } from "../../ui/TodoForm";
import { TodoHeader } from "../../ui/TodoHeader";
import { ChangeAlert } from "../../ui/ChangeAlert";
import { UpdateModal } from "../../ui/UpdateModal";
import '../../routes/App.css'
import { NavLink } from "react-router-dom";

const HomePage = () => {
const { state, stateUpdater, functions } = useTodos()
const {
        search,
        totalTodos,
        completedTodos,
        toSearched,
        loading,
        openUpdateModal,
        dataTodo
} = state
const {
        setSearch,
      
        setOpenUpdateModal, 
} = stateUpdater
const {
        // deleteTodos,
        // completeTodos,
        syncUp, 
        fetchNotePuttWithID,
        deleteFetchNote
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
        <TodoItem data={element} key={element.id} fetchNotePuttWithID={fetchNotePuttWithID} deleteFetchNote={deleteFetchNote}/>
      )}
    >
      {/* {
         element => (
          <TodoItem data={element} key={element.text} deleteTodos={deleteTodos} completeTodos={completeTodos}/>
        )
      } */}
    </TodoList>
    <NavLink to={'/todo-machine/new-todo'}>
      <CreateTodoButton/> 
    </NavLink>
    {
      openUpdateModal &&
      <UpdateModal>
        <ChangeAlert syncUp={syncUp} setOpenUpdateModal={setOpenUpdateModal} openUpdateModal={openUpdateModal}/>
      </UpdateModal>
    }
  </div>
  )
}

export { HomePage }