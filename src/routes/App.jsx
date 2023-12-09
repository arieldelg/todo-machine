import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { NewPage } from "./NewPage";
import { EditPage } from "./EditPage";
import { NotFound } from "./NotFound";


const AppRoutes = () => {
  const routes = useRoutes([
    {path: 'todo-machine/', element: <HomePage/>},
    {path: 'todo-machine/edit/:id', element: <EditPage/>},
    {path: 'todo-machine/new-todo', element: <NewPage/>},
    {path: 'todo-machine/*', element: <NotFound/>},
  ])
  return routes
}

const App = () => {

  return (
  <>
    <BrowserRouter>
        <AppRoutes/>
    </BrowserRouter>
  </>
  )
}

export { App }