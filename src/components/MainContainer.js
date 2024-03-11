import React from 'react'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'
import VideoTitleForBackground from './VideoTitleForBackground';

function MainContainer() {

    const movies= useSelector(store => store?.movie?.nowPlayingMovies);

    if(!movies) return; 
    
    const {title, overview, id}= movies[2];


  return (
    <div >
        <VideoTitleForBackground  title={title} overview={overview} movie_id={id}/>
        <VideoBackground movie_id={id}/>
    </div>
  )
}

export default MainContainer