import React from 'react'
import { useSelector } from 'react-redux'

const WatchMovie = () => {
    const trailerId= useSelector(store=> store.movie?.trailerId)

  return (
    <div><iframe
    src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=0&rel=0&modestbranding=1`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    className=' h-screen w-full'
  ></iframe></div>
  )
}

export default WatchMovie