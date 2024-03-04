import React, { useEffect } from 'react'
import Login from './components/Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './components/Body'
import Browse from './components/Browse'

const App = () => {

  const Applayout= createBrowserRouter([
    {
    path: '/',
    element: <Login />
    }
    ,
    {
      path: '/browse',
        element: <Browse />,
    }]);
    
  return (
    <div >
      <RouterProvider router={Applayout} />
    </div>
  )
}

export default App