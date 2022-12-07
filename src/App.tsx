import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root } from './pages/Root'
import reactLogo from './assets/react.svg'
import './App.css'
import ErrorPage from './pages/ErrorPage/ErrorPage'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: []
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
