import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { NewPage } from "./NewPage";
import { EditPage } from "./EditPage";
import { NotFound } from "./NotFound";


const AppRoutes = () => {
  const routes = useRoutes([
    {path: '/', element: <HomePage/>},
    {path: '/edit/:id', element: <EditPage/>},
    {path: '/new-todo', element: <NewPage/>},
    {path: '/*', element: <NotFound/>},
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