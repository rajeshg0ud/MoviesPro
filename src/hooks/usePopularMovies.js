import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';
import { API_Options } from '../utils/constants';

const usePopularMovies = () => {
    const dispatch=useDispatch();

    const getPopularMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_Options)
  
      const jsonData=await data.json();
      dispatch(addPopularMovies(jsonData.results))
      
      console.log(jsonData.results)
    }
  
    useEffect(()=>{
      getPopularMovies();
    },[])
}

export default usePopularMovies