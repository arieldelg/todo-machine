import React from "react";
import { TodoContext } from "../TodoContext";

const TodoSearch = () => {
  const { setSearch, search } = React.useContext(TodoContext)
    return (
      <div className='w-3/4 flex items-center h-20'>
        <input type="text" placeholder='Busca Aqui' className='w-full outline-none rounded-md px-2 py-1 text-lg' onChange={(event) => setSearch(event.target.value)} value={search}/>
      </div>
    )
}

export { TodoSearch }