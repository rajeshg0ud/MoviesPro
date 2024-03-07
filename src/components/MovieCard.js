import React, { useEffect, useState } from 'react'
import { API_Options, IMG_CDN } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addTrailerInfo } from '../utils/movieSlice';
import { useNavigate } from 'react-router-dom';

function MovieCard({ value, posterPath }) {
  const movieId = value.id;

  
  const navigate=useNavigate();

  const dispatch=useDispatch();

   const fetchMovieData = async () => {
      
      const data2= await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, API_Options);
      const jsonData2= await data2.json();
      console.log(jsonData2)
      dispatch(addTrailerInfo(jsonData2))
      
    navigate("/watch" )
    };

  const handleMovieClick = () => {
    fetchMovieData();
  };


  if (!posterPath) return null;

  return (
    <div className="w-32 md:w-44 pr-4" onClick={handleMovieClick}>
      <img  alt="Movie Card" src={IMG_CDN + posterPath} className='rounded-md px-1 cursor-pointer' />
    </div>
  );
}

export default MovieCard