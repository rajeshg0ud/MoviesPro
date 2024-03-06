import React, { useEffect } from 'react'
import Login from './components/Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './components/Body'
import Browse from './components/Browse'
import WatchMovie from './components/WatchMovie'
import WatchMovieBackground from './components/WatchMovieBackground'
import Watch from './components/Watch'

const App = () => {

  const Applayout= createBrowserRouter([
    {
    path: '/',
    element: <Body />,
    children:[
    {
      path: '/',
      element: <Login />,
    }
    ,
    {
      path: '/browse',
        element: <Browse />,
    },
    {
      path: '/watch',
      element:<Watch />,
      children:[{
        path: '/watch',
        element: <WatchMovieBackground />
      },
    {
      path: '/watch/movie',
      element: <WatchMovie />
    }]
    }
    ]
    }
  ]);
    
  return (
    <div >
      <RouterProvider router={Applayout} />
    </div>
  )
}

export default App