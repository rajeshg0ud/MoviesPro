import React from 'react'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'
import VideoTitleForBackground from './VideoTitleForBackground';

function MainContainer() {

    const movies= useSelector(store => store?.movie?.nowPlayingMovies);

    if(!movies) return <h1 className=' flex justify-center pt-28 font-bold text-3xl drop-shadow-lg z-50'>{ "Facing server issues. Please try again later :("}</h1>

    
    const {title, overview, id}= movies[2];


  return (
    <div >
        <VideoTitleForBackground  title={title} overview={overview} movie_id={id}/>
        <VideoBackground movie_id={id}/>
    </div>
  )
}

export default MainContainer
