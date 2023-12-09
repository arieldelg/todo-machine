import React from "react";

const TodoSearch = ({ search, setSearch }) => {
  return (
    <div className='w-3/4 flex items-center h-20 m-auto'>
      <input type="text" placeholder='Busca Aqui' className='w-full outline-none rounded-md px-2 py-1 text-lg' onChange={(event) => setSearch(event.target.value)} value={search}/>
    </div>
  )
}

export { TodoSearch }