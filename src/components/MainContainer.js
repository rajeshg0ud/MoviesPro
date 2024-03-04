import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

function MainContainer() {

    const movies= useSelector(store => store?.movie?.nowPlayingMovies);

    if(!movies) return; 
    
    const {title, overview, id}= movies[1];


  return (
    <div >
        <VideoTitle  title={title} overview={overview}/>
        <VideoBackground movie_id={id}/>
    </div>
  )
}

export default MainContainer