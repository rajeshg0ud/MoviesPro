import React, { useEffect, useState } from 'react'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useDispatch } from 'react-redux';
import { addTrailerInfo } from '../utils/movieSlice';
import { API_Options } from '../utils/constants';
import { useSearchParams } from 'react-router-dom';

const WatchMovieBackground = () => {
  
 // const trailerInfo=useSelector(store=> store.movie?.trailerInfo);

 const  [searchParams]=useSearchParams();
 const movieId= searchParams.get("m");
  
  const [trailerInfo, setTrailerInfo]=useState(null);

  
  const dispatch=useDispatch();

  const fetchMovieData = async () => {
      
    const data2= await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, API_Options);
    const jsonData2= await data2.json();
    console.log(jsonData2)
    setTrailerInfo(jsonData2)
    dispatch(addTrailerInfo(jsonData2))
  };

  useEffect(()=>{
    fetchMovieData();
  },[])

  if(!trailerInfo) return null;

  const {original_title, overview, id}= trailerInfo;
  
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // optional, adds smooth scrolling
  });
  

  return (
    <div className='text-xl'>
    <VideoTitle  title={original_title} overview={overview}  movie_id={id}/>
    <VideoBackground movie_id={id}/>
    </div>
  )
}

export default WatchMovieBackground