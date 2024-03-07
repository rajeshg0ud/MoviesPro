import React from 'react'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const WatchMovieBackground = () => {
  
  const trailerInfo=useSelector(store=> store.movie?.trailerInfo);
  
  const {original_title, overview, id}= trailerInfo;
  
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // optional, adds smooth scrolling
  });
  

  return (
    <div className='text-xl'>
    <VideoTitle  title={original_title} overview={overview}/>
    <VideoBackground movie_id={id}/>
    </div>
  )
}

export default WatchMovieBackground