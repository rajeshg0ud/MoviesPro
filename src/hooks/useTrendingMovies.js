import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_Options } from '../utils/constants';
import { addTrendingMovies } from '../utils/movieSlice';

const useTrendingMovies = () => {
    const dispatch=useDispatch();

    const getTrendingMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/trending/movie/day', API_Options)
  
      const jsonData=await data.json();
      dispatch(addTrendingMovies(jsonData.results))
      
    }
  
    useEffect(()=>{
      getTrendingMovies();
    },[])
}

export default useTrendingMovies