import React, { useEffect, useState } from 'react'
import { API_Options, IMG_CDN } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addTrailerInfo } from '../utils/movieSlice';
import { useNavigate } from 'react-router-dom';

function MovieCard({ value, posterPath }) {
  const movieId = value.id;
  
  const navigate=useNavigate();

  const handleMovieClick = () => {
    navigate(`/watch?m=${movieId}` )
  };


  if (!posterPath) return null;

  return (
    <div className="w-32 md:w-44 pr-4" onClick={handleMovieClick}>
      <img  alt="Movie Card" src={IMG_CDN + posterPath} className='rounded-md px-1 cursor-pointer' />
    </div>
  );
}

export default MovieCard