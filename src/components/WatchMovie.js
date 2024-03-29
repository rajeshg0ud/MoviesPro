import React from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';

const WatchMovie = () => {
  const [searchParams]= useSearchParams();
  const trailerId= searchParams.get("t");

  console.log(trailerId);

  window.scrollTo({
    top: 0,
    behavior: 'smooth' // optional, adds smooth scrolling
  });
  

  return (
    <div><iframe
    src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=0&rel=0&modestbranding=1`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    className=' h-[98vh] md:h-screen w-full'
  ></iframe></div>
  )
}

export default WatchMovie